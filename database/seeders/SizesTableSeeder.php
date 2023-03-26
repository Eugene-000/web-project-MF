<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sizes')->insert([
            [
                'name' => 'S',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'M',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'L',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'XL',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'XXL',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
