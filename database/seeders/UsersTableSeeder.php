<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'full_name' => 'Грязнов Евгений Александрович',
            'email' => 'admin',
            'password' => bcrypt('123'),
        ],);

        User::create([
            'full_name' => 'Карташова Марина Владимировна',
            'email' => 'admin2',
            'password' => bcrypt('123'),
        ]);
    }
}
