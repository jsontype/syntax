<?php

namespace App\Http\Controllers\Backend;

use App\Authorizable;
use App\Events\Backend\UserCreated;
use App\Events\Backend\UserUpdated;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\UserAccountCreated;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    // use Authorizable;

    public function __construct()
    {
        // Page Title
        $this->module_title = 'profile.title';

        // module name
        $this->module_name = 'users';

        // directory path of the module
        $this->module_path = 'users';

        // module icon
        $this->module_icon = 'fa-solid fa-users';

        // module model name, path
        $this->module_model = "App\Models\User";

        view()->share([
            'module_title' => $this->module_title,
            'module_icon' => $this->module_icon,
            'module_name' => $this->module_name,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $user = auth()->user();

        $user->status = 0;

        $user->save();

        event(new UserUpdated($$module_name_singular));

        return response()->json(['message' => 'Account has been deactivated!']);
    }

    /**
     * Resend Email Confirmation Code to User.
     *
     * @param [type] $hashid [description]
     * @return [type] [description]
     */
    public function emailConfirmationResend($id)
    {
        if ($id != auth()->user()->id) {
            if (auth()->user()->hasAnyRole(['admin'])) {
                // Log::info(auth()->user()->name.' ('.auth()->user()->id.') - User Requested for Email Verification.');
            } else {
                // Log::warning(auth()->user()->name.' ('.auth()->user()->id.') - User trying to confirm another users email.');

                abort('404');
            }
        }

        $user = User::where('id', '=', $id)->first();

        if ($user) {
            if ($user->email_verified_at == null) {
                // Send Email To Registered User
                $user->sendEmailVerificationNotification();

                flash('<i class="fas fa-check"></i> Email Sent! Please Check Your Inbox.')->success()->important();

                return redirect()->back();
            } else {
                flash($user->name.', You already confirmed your email address at '.$user->email_verified_at->isoFormat('LL'))->success()->important();

                return redirect()->back();
            }
        }
    }

    public function user_list(Request $request)
    {
        $term = trim($request->q);

        $role = $request->role;

        $query_data = [];

        if ($role == 'employee') {
            $query_data = User::role(['manager', 'employee'])->with('media')->where(function ($q) {
                if (! empty($term)) {
                    $q->orWhere('first_name', 'LIKE', "%$term%")->
                    $q->orWhere('last_name', 'LIKE', "%$term%");
                }
            })->where('is_show_calender', 1)->get();
        } elseif ($role == 'user') {
            $query_data = User::role(['user'])->where(function ($q) {
                if (! empty($term)) {
                    $q->orWhere('first_name', 'LIKE', "%$term%")->
                    $q->orWhere('last_name', 'LIKE', "%$term%");
                }
            })->active()->get();
        }

        $data = [];

        foreach ($query_data as $row) {
            $data[] = [
                'id' => $row->id,
                'full_name' => $row->first_name.' '.$row->last_name,
                'email' => $row->email,
                'mobile' => $row->mobile,
                'profile_image' => $row->profile_image,
                'created_at' => $row->created_at,
            ];
        }

        return response()->json($data);
    }

    public function create_customer(Request $request)
    {
        $request->validate([
            'first_name' => 'required|min:3|max:191',
            'last_name' => 'required|min:3|max:191',
            'email' => 'required|email|regex:/(.+)@(.+)\.(.+)/i|max:191|unique:users',
        ]);

        $data_array = $request->except('_token', 'roles', 'permissions', 'password_confirmation');
        $data_array['name'] = $request->first_name.' '.$request->last_name;

        if ($request->confirmed == 1) {
            $data_array = Arr::add($data_array, 'email_verified_at', Carbon::now());
        } else {
            $data_array = Arr::add($data_array, 'email_verified_at', null);
        }

        $user = User::create($data_array);

        $roles = $request['roles'];
        $permissions = $request['permissions'];

        // Sync Roles
        $roles = ['user'];
        $user->syncRoles($roles);

        \Artisan::call('cache:clear');

        event(new UserCreated($user));

        $message = __('user.user_created');

        if ($request->email_credentials == 1) {
            $data = [
                'password' => $request->password,
            ];

            try {
                $user->notify(new UserAccountCreated($data));
            } catch (\Exception $e) {
                \Log::error($e->getMessage());
            }

            $message = __('user.account_crdential');
        }

        return response()->json(['data' => $user, 'message' => $message, 'status' => true]);
    }

    // web_player_id update
    public function update_player_id(Request $request)
    {
        auth()->user()->update_player_id($request->player_id);

        return response()->json(['data' => $request->player_id, 'message' => 'Update Web Player ID', 'status' => true]);
    }

    public function myProfile()
    {
        return view('backend.profile.index');
    }

    public function authData()
    {
        return response()->json(['data' => auth()->user(), 'status' => true]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $data = User::findOrFail($user->id);
        $request_data = $request->except('profile_image');
        $data->update($request_data);

        if ($request->custom_fields_data) {
            $data->updateCustomFieldData(json_decode($request->custom_fields_data));
        }

        storeMediaFile($data, $request->file('profile_image'), 'profile_image');

        $message = __('messages.update_form', ['form' => __('customer.singular_title')]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    public function change_password(Request $request)
    {
        if (env('IS_DEMO')) {
            return response()->json(['message' => __('messages.permission_denied'), 'status' => false], 200);
        }
        $user = Auth::user(); // Get the currently authenticated user

        $user_id = $user->id; // Retrieve the user's ID

        $data = User::findOrFail($user_id);

        $request_data = $request->only('old_password', 'new_password', 'confirm_password');

        if (! Hash::check($request->old_password, $data->password)) {
            return response()->json(['message' => __('messages.old_password_mismatch'), 'status' => false], 403);
        }

        if ($request_data['new_password'] === $request_data['old_password']) {
            return response()->json(['message' => __('messages.new_password_mismatch'), 'status' => false], 403);
        }

        if ($request_data['new_password'] !== $request_data['confirm_password']) {
            return response()->json(['message' => __('messages.password_mismatch'), 'status' => false], 403);
        }

        $request_data['password'] = Hash::make($request_data['new_password']);

        $data->update($request_data);

        $message = __('messages.password_update');

        return response()->json(['message' => $message, 'status' => true], 200);
    }
}
