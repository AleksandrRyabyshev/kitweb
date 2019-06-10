<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert([
//        'id' => Int::random(10),
        'user_name' => 'alex',
        'auth_key' => Str::random(10),
        'email' => Str::random(10).'ss@gmail.com',
        'password' => bcrypt('secret'),
        'password_reset_token' => bcrypt('secret'),
        'user_auth_token' => Str::random(10),
        'sms_code' => Str::random(6),
        'first_name' => Str::random(10),
        'last_name' => Str::random(10),
        'middle_name' => Str::random(10),
        'phone' => '+38 099 000 00 00',
        'birth_date' => '2000-01-01',
        'logo' => Str::random(10),
        'address' => Str::random(10),
        'house' => 12,
        'city' => Str::random(10),
        'role' => 'admin',
      ]);
    }
}
