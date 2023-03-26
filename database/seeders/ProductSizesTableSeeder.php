<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_sizes')->insert([
            ['product_id' => 1, 'size_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 1, 'size_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 2, 'size_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 2, 'size_id' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 3, 'size_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 3, 'size_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 4, 'size_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 4, 'size_id' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 5, 'size_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 5, 'size_id' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 6, 'size_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 7, 'size_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 7, 'size_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 7, 'size_id' => 5, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 8, 'size_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 8, 'size_id' => 5, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 9, 'size_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 10, 'size_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 10, 'size_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['product_id' => 10, 'size_id' => 5, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
