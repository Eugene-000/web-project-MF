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
                'image' => 'product1.jpg',
                'price' => 1000,
                'category_id' => 1,
            ],
            [
                'name' => 'Product 2',
                'description' => 'This is the description for product 2',
                'image' => 'product2.jpg',
                'price' => 2000,
                'category_id' => 1,
            ],
            [
                'name' => 'Product 3',
                'description' => 'This is the description for product 3',
                'image' => 'product3.jpg',
                'price' => 1500,
                'category_id' => 2,
            ],
            [
                'name' => 'Product 4',
                'description' => 'This is the description for product 4',
                'image' => 'product4.jpg',
                'price' => 3000,
                'category_id' => 2,
            ],
            [
                'name' => 'Product 5',
                'description' => 'This is the description for product 5',
                'image' => 'product5.jpg',
                'price' => 2500,
                'category_id' => 3,
            ],
            [
                'name' => 'Product 6',
                'description' => 'This is the description for product 6',
                'image' => 'product6.jpg',
                'price' => 5000,
                'category_id' => 3,
            ],
            [
                'name' => 'Product 7',
                'description' => 'This is the description for product 7',
                'image' => 'product7.jpg',
                'price' => 1200,
                'category_id' => 4,
            ],
            [
                'name' => 'Product 8',
                'description' => 'This is the description for product 8',
                'image' => 'product8.jpg',
                'price' => 1800,
                'category_id' => 4,
            ],
            [
                'name' => 'Product 9',
                'description' => 'This is the description for product 9',
                'image' => 'product9.jpg',
                'price' => 2200,
                'category_id' => 5,
            ],
            [
                'name' => 'Product 10',
                'description' => 'This is the description for product 10',
                'image' => 'product10.jpg',
                'price' => 3500,
                'category_id' => 5,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
