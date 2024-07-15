<?php

namespace App\Http\Controllers\Security;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermission extends Controller
{
    public function index(Request $request)
    {
        $roles = Role::get();
        $permissions = Permission::get();
        return view('dashboard.permission-role.permissions', compact('roles', 'permissions'));
    }

    public function store(Request $request)
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = Permission::get()->pluck('name')->toArray();
        Role::get()->map(function($role) use($permissions){
            $role->revokePermissionTo($permissions);
        });

       
        foreach ($request->permission as $permission => $roles) {
            Permission::findOrCreate($permission)->syncRoles($roles);
        }
       
        return redirect()->route('permission-role.list')->withSuccess(__(__('permission-role.save_form')));
    }
}
