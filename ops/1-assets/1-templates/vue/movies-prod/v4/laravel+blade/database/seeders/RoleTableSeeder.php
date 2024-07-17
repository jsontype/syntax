<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'admin',
                'title' => 'Admin',
                'status' => 1,
                'permissions' => ['dashboard','rating', 'comment', 'user', 'category', 'movie', 'show', 'pricing', 'ui-elements', 'pages','permission-role']
            ],
            [
                'name' => 'demo_admin',
                'title' => 'Demo Admin',
                'status' => 1,
                'permissions' => ['dashboard', 'category', 'movie', 'show', 'ui-elements','pages']
            ],
            [
                'name' => 'user',
                'title' => 'User',
                'status' => 1,
                'permissions' => ['dashboard','rating', 'comment', 'pricing', 'ui-elements','pages']
            ]
        ];

        foreach ($roles as $key => $value) {
            $permission = $value['permissions'];
            unset($value['permissions']);
            $role = Role::create($value);
            $role->givePermissionTo($permission);
        }
    }
}
