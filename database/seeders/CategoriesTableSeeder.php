<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Верхняя одежда', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Спортивная одежда', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Толстовки и свитеры', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Джинсы и брюки', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Рубашки и футболки', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Шорты', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
