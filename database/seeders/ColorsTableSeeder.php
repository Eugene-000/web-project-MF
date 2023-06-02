<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('colors')->insert([
            [
                'name' => 'Красный',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Синий',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Зелёный',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Жёлтый',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Чёрный',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
