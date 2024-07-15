<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Laracasts\Flash\Flash;

class NotificationsController extends Controller
{
    public function __construct()
    {
        // Page Title
        $this->module_title = 'brand.title';

        // module name
        $this->module_name = 'notifications';

        // directory path of the module
        $this->module_path = 'notifications';

        // module icon
        $this->module_icon = 'c-icon fas fa-bell';

        // module model name, path
        $this->module_model = "App\Models\User";

        $this->middleware(['permission:view_notification'])->only('index');
        $this->middleware(['permission:edit_notification'])->only('edit', 'update');
        $this->middleware(['permission:add_notification'])->only('store');
        $this->middleware(['permission:delete_notification'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $module_title = $this->module_title;
        $module_name = $this->module_name;
        $module_path = $this->module_path;
        $module_icon = $this->module_icon;
        $module_model = $this->module_model;
        $module_name_singular = Str::singular($module_name);

        $module_action = 'List';

        $user = auth()->user();

        if (count($user->unreadNotifications) > 0) {
            $user->unreadNotifications->markAsRead();
        }

        $$module_name = auth()->user()->notifications()->paginate();
        $unread_notifications_count = auth()->user()->unreadNotifications()->count();

        $notifications_count = 0;

        Log::info(label_case($module_title.' '.$module_action).' | User:'.Auth::user()->name.'(ID:'.Auth::user()->id.')');

        return view(
            "backend.$module_path.index",
            compact('module_title', 'module_name', "$module_name", 'module_path', 'module_icon', 'module_action', 'module_name_singular', 'unread_notifications_count', 'notifications_count')
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $module_title = $this->module_title;
        $module_name = $this->module_name;
        $module_path = $this->module_path;
        $module_icon = $this->module_icon;
        $module_model = $this->module_model;
        $module_name_singular = Str::singular($module_name);

        $module_action = 'Show';

        $$module_name_singular = Notification::where('id', '=', $id)->where('notifiable_id', '=', auth()->user()->id)->first();

        if ($$module_name_singular) {
            if ($$module_name_singular->read_at == '') {
                $$module_name_singular->read_at = Carbon::now();
                $$module_name_singular->save();
            }
        } else {
            Log::info(label_case($module_title.' '.$module_action).' | User:'.Auth::user()->name.'(ID:'.Auth::user()->id.')');
            abort(404);
        }

        Log::info(label_case($module_title.' '.$module_action).' | User:'.Auth::user()->name.'(ID:'.Auth::user()->id.')');

        return view(
            "backend.$module_name.show",
            compact('module_title', 'module_name', 'module_icon', 'module_name_singular', 'module_action', "$module_name_singular")
        );
    }

    /**
     * Delete All the Notifications.
     *
     * @param  int  $id
     * @return Response
     */
    public function deleteAll()
    {
        $module_title = $this->module_title;
        $module_name = $this->module_name;
        $module_path = $this->module_path;
        $module_icon = $this->module_icon;
        $module_model = $this->module_model;
        $module_name_singular = Str::singular($module_name);

        $module_action = 'Delete All';

        $user = auth()->user();

        $user->notifications()->delete();

        Flash::success("<i class='fas fa-check'></i> All Notifications Deleted")->important();

        Log::info(label_case($module_title.' '.$module_action).' | User:'.Auth::user()->name.'(ID:'.Auth::user()->id.')');

        return back();
    }

    /**
     * Mark All Notifications As Read.
     *
     * @return [type] [description]
     */
    public function markAllAsRead()
    {
        $module_title = $this->module_title;
        $module_name = $this->module_name;
        $module_path = $this->module_path;
        $module_icon = $this->module_icon;
        $module_model = $this->module_model;
        $module_name_singular = Str::singular($module_name);

        $module_action = 'Mark All As Read';

        $user = auth()->user();

        $user->unreadNotifications()->update(['read_at' => now()]);

        Flash::success("<i class='fas fa-check'></i> All Notifications Marked As Read")->important();

        Log::info(label_case($module_title.' '.$module_action).' | User:'.Auth::user()->name.'(ID:'.Auth::user()->id.')');

        return back();
    }

    public function notificationList(Request $request)
    {
        $module_title = $this->module_title;
        $module_name = $this->module_name;
        $module_path = $this->module_path;
        $module_icon = $this->module_icon;
        $module_model = $this->module_model;
        $module_name_singular = Str::singular($module_name);

        $module_action = 'Show';
        $user = auth()->user();
        $user->last_notification_seen = now();
        $user->save();

        $type = isset($request->type) ? $request->type : null;
        if ($type == 'markas_read') {
            if (count($user->unreadNotifications) > 0) {
                $user->unreadNotifications->markAsRead();
            }
            $notifications = $user->notifications->take(5);
        } elseif ($type == null) {
            $notifications = $user->notifications->take(5);
        // dd($notifications);
        } else {
            $notifications = $user->notifications->where('data.type', $type)->take(5);
        }
        $all_unread_count = isset($user->unreadNotifications) ? $user->unreadNotifications->count() : 0;

        $new_booking_count = isset($user->unreadNotifications) ? $user->unreadNotifications->where('data.type', 'booking_added')->count() : 0;

        return response()->json([
            'status' => true,
            'type' => $type,
            'data' => view("backend.$module_name.list", compact('notifications', 'new_booking_count', 'all_unread_count', 'user'))->render(),
        ]);
    }

    public function notificationCounts(Request $request)
    {
        $user = auth()->user();
        $unread_count = 0;
        $unread_total_count = 0;

        if (isset($user->unreadNotifications)) {
            $unread_count = $user->unreadNotifications->where('created_at', '>', $user->last_notification_seen)->count();
            $unread_total_count = $user->unreadNotifications->count();
        }

        return response()->json([
            'status' => true,
            'counts' => $unread_count,
            'unread_total_count' => $unread_total_count,
        ]);
    }
}
