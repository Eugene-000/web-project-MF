<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            ['user_id' => 1, 'date' => now(), 'delivery_address' => 'ул. Варейкиса 25,28', 'total_price' => 5000, 'created_at' => now(), 'updated_at' => now()],
            ['user_id' => 2, 'date' => now(), 'delivery_address' => 'ул. Варейкиса 25,28', 'total_price' => 10000, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
