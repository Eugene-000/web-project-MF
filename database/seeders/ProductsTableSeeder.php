<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'Product 1',
                'description' => 'This is the description for product 1',
                'image' => '/images/product1.png',
                'price' => 1000,
                'category_id' => 1,
            ],
            [
                'name' => 'Product 2',
                'description' => 'This is the description for product 2',
                'image' => '/images/product1.png',
                'price' => 2000,
                'category_id' => 1,
            ],
            [
                'name' => 'Product 3',
                'description' => 'This is the description for product 3',
                'image' => '/images/product1.png',
                'price' => 1500,
                'category_id' => 2,
            ],
            [
                'name' => 'Product 4',
                'description' => 'This is the description for product 4',
                'image' => '/images/product1.png',
                'price' => 3000,
                'category_id' => 2,
            ],
            [
                'name' => 'Product 5',
                'description' => 'This is the description for product 5',
                'image' => '/images/product1.png',
                'price' => 2500,
                'category_id' => 3,
            ],
            [
                'name' => 'Product 6',
                'description' => 'This is the description for product 6',
                'image' => '/images/product1.png',
                'price' => 5000,
                'category_id' => 3,
            ],
            [
                'name' => 'Product 7',
                'description' => 'This is the description for product 7',
                'image' => '/images/product1.png',
                'price' => 1200,
                'category_id' => 4,
            ],
            [
                'name' => 'Product 8',
                'description' => 'This is the description for product 8',
                'image' => '/images/product1.png',
                'price' => 1800,
                'category_id' => 4,
            ],
            [
                'name' => 'Product 9',
                'description' => 'This is the description for product 9',
                'image' => '/images/product1.png',
                'price' => 2200,
                'category_id' => 5,
            ],
            [
                'name' => 'Product 10',
                'description' => 'This is the description for product 10',
                'image' => '/images/product1.png',
                'price' => 3500,
                'category_id' => 5,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
