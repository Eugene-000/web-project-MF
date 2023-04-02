<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            CategoriesTableSeeder::class,
            ProductsTableSeeder::class,
            ColorsTableSeeder::class,
            SizesTableSeeder::class,
            ProductColorsTableSeeder::class,
            ProductSizesTableSeeder::class,
            CartsTableSeeder::class,
            CartItemsTableSeeder::class,
            OrdersTableSeeder::class,
            OrderItemsTableSeeder::class,
        ]);
    }
}
