<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CartItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cart_items')->insert([
            ['cart_id' => 1, 'product_id' => 1, 'size_id' => 1, 'color_id' => 1, 'quantity' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['cart_id' => 1, 'product_id' => 2, 'size_id' => 4, 'color_id' => 3, 'quantity' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['cart_id' => 2, 'product_id' => 4, 'size_id' => 2, 'color_id' => 4, 'quantity' => 3, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
