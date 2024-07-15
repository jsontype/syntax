<?php

namespace Database\Seeders\Auth;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

/**
 * Class PermissionRoleTableSeeder.
 */
class PermissionRoleTableSeeder extends Seeder
{
    /**
     * Run the database seed.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        $admin = Role::firstOrCreate(['name' => 'admin', 'title' => 'Admin', 'is_fixed' => true]);
        $user = Role::firstOrCreate(['name' => 'user', 'title' => 'User', 'is_fixed' => true]);

        $modules = config('constant.MODULES');

        foreach ($modules as $key => $module) {
            $permissions = ['view', 'add', 'edit', 'delete'];
            $module_name = strtolower(str_replace(' ', '_', $module['module_name']));
            foreach ($permissions as $key => $value) {
                $permission_name = $value.'_'.$module_name;
                Permission::firstOrCreate(['name' => $permission_name, 'is_fixed' => true]);
            }
            if (isset($module['more_permission']) && is_array($module['more_permission'])) {
                foreach ($module['more_permission'] as $key => $value) {
                    $permission_name = $module_name.'_'.$value;
                    Permission::firstOrCreate(['name' => $permission_name, 'is_fixed' => true]);
                }
            }
        }
        // Assign Permissions to Roles
        $admin->givePermissionTo(Permission::get());
        $user->givePermissionTo([
            'view_rating',
            'add_rating',
            'edit_rating',
            'delete_rating',
            'view_comments',
            'add_comments',
            'edit_comments',
            'delete_comments',
            'view_users',
            'add_users',
            'edit_users',
            'delete_users',
            'view_movies',
            'add_movies',
            'edit_movies',
            'delete_movies',
            'view_shows',
            'add_shows',
            'edit_shows',
            'delete_shows',
            'view_seasons',
            'add_seasons',
            'edit_seasons',
            'delete_seasons',
            'view_episodes',
            'add_episodes',
            'edit_episodes',
            'delete_episodes',
              ]);


        Schema::enableForeignKeyConstraints();
    }
}
