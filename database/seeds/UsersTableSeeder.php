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
        'username' => Str::random(10),
        'auth_key' => Str::random(10),
        'email' => Str::random(10).'ss@gmail.com',
        'password_hash' => bcrypt('secret'),
        'password_reset_token' => bcrypt('secret'),
        'user_auth_token' => Str::random(10),
        'sms_code' => Str::random(6),
        'fullName' => Str::random(10),
        'firstName' => Str::random(10),
        'middleName' => Str::random(10),
        'birthDate' => '2000-01-01',
        'logo' => Str::random(10),
        'address' => Str::random(10),
        'city' => Str::random(10),
      ]);
    }
}
