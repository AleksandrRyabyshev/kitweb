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
        'order_name' => 'car',
        'service_id' => rand (10, 1000),
        'numb_seal' => rand (10, 1000),
        'box_numb' => rand (10, 1000),
        'code' => rand (10, 1000),
        'locality' => 'sumy',
        'degree_wear' => rand (10, 1000),
        'type_service' => 'Химчистка',
        'defects' => 'абс',
        'warning' => 'деф',
        'date_receipt' => date("Y-m-d H:i:s"),
        'date_issue' => date("Y-m-d H:i:s"),
        'status' => rand (10, 1000),
        'payment_type' => 'dfs',
        'payment_status' => rand (10, 1000),
        'shipment' => rand (10, 1000),
        'price' => rand (10, 1000),
      ]);

      DB::table('orders')->insert([
        'user_id' => 1,
        'order_name' => 'car 2',
        'service_id' => rand (10, 1000),
        'numb_seal' => rand (10, 1000),
        'box_numb' => rand (10, 1000),
        'code' => rand (10, 1000),
        'locality' => 'sumy',
        'degree_wear' => rand (10, 1000),
        'type_service' => 'Ремонт обуви',
        'defects' => 'абс',
        'warning' => 'деф',
        'date_receipt' => date("Y-m-d H:i:s"),
        'date_issue' => date("Y-m-d H:i:s"),
        'status' => rand (10, 1000),
        'payment_type' => 'vcvc',
        'payment_status' => rand (10, 1000),
        'shipment' => rand (10, 1000),
        'price' => rand (10, 1000),
      ]);
    }
}
