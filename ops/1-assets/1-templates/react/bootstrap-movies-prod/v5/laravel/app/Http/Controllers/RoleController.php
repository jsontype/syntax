<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Role::all();
        if (request()->wantsJson()) {
            return response()->json(['data' => $data, 'status' => true]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = new Role;
        $view = view('permission-role.form-role', ['data' => $data])->render();

        return response()->json(['data' => $view, 'status' => true]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
        $data = $request->all();

        $data = $this->setRoleArray($data);

        $role_data = Role::create($data);

        if (isset($data['import_role'])) {
            $import_role = $data['import_role'];

            app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

            $role = Role::find($import_role);
            $new_role = Role::find($role_data['id']);
            $permissions = $role->permissions;

            if ($new_role) {
                $new_role->permissions()->syncWithoutDetaching($permissions);
            }
        }

        $message = __('messages.create_form', ['form' => __('page.lbl_role')]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Role::find($id);
        $view = view('permission-role.form-role', ['data' => $data])->render();

        return response()->json(['data' => $view, 'status' => true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, $id)
    {
        if (env('IS_DEMO') == true) {
            return redirect()->back()->with('error', __('messages.permission_denied'));
        }
        $role = Role::find($id);

        $data = $request->all();

        $data = $this->setRoleArray($data);

        $role->update($data);

        return redirect()->route('backend.permission-role.list')->withSuccess(__('messages.update_form', ['form' => __('permission-role.role_title')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // if (env('IS_DEMO') == true) {
        //     return redirect()->back()->with('error', __('messages.permission_denied'));
        // }
        $role = Role::findOrFail($id);

        if (isset($role->id)) {
            app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

            $permissions = Permission::get()->pluck('name')->toArray();

            $role->permissions()->detach();

            $role->delete();
            $status = 'success';
            $message = __('messages.delete_form', ['form' => __('page.lbl_role')]);
        }

        return response()->json(['status' => true, 'message' => $message]);
    }

    protected function setRoleArray(array $data): array
    {
        $data['name'] = strtolower(str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9_.]/', '', $data['title'])));

        $data['title'] = str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9_.]/', '', $data['title']));

        return $data;
    }
}
