<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_name');
            $table->string('auth_key', 32);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('user_auth_token');
            $table->string('sms_code', 6);
            $table->string('password_reset_token');
            $table->string('first_name');
            $table->string('last_name', 50);
            $table->string('middle_name');
            $table->string('phone');
            $table->date('birth_date');
            $table->string('logo');
            $table->string('address');
            $table->integer('house');
            $table->string('city', 50);
            $table->string('role');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
