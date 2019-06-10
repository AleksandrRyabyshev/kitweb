<?php

use Illuminate\Database\Seeder;

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
        'user_id' => 1,
        'order_name' => 'cars',
        'service_id' => rand (10, 1000),
        'numb_seal' => rand (10, 1000),
        'box_numb' => rand (10, 1000),
        'code' => rand (10, 1000),
        'locality' => 'sumy',
        'degree_wear' => rand (10, 1000),
        'defects' => 'абс',
        'warning' => 'деф',
        'date_receipt' => '2000-01-01',
        'date_issue' => '2001-01-01',
        'status' => rand (10, 1000),
        'payment_type' => rand (10, 1000),
        'payment_status' => rand (10, 1000),
        'shipment' => rand (10, 1000),
        'price' => rand (10, 1000),
      ]);
    }
}
