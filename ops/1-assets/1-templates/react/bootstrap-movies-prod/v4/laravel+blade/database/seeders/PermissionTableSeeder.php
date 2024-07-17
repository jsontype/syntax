<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name' => 'dashboard',
                'title' => 'Dashboard',
            ],
            [
                'name' => 'rating',
                'title' => 'Rating',
            ],
            [
                'name' => 'comment',
                'title' => 'Comment',
            ],
            [
                'name' => 'user',
                'title' => 'User',
            ],
            [
                'name' => 'category',
                'title' => 'Category',
            ],
            [
                'name' => 'movie',
                'title' => 'Movie',
            ],
            [
                'name' => 'show',
                'title' => 'Show',
            ],
            [
                'name' => 'pricing',
                'title' => 'Pricing',
            ],
            [
                'name' => 'permission-role',
                'title' => 'Permission',
            ],
            [
                'name' => 'ui-elements',
                'title' => 'UI Elements',
            ],
            [
                'name' => 'pages',
                'title' => 'Pages',
            ]
        ];

        foreach ($permissions as $value) {
            Permission::create($value);
        }
    }
}
