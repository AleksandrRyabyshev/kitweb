<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('userid')->unsigned();
            $table->integer('service_id');
            $table->integer('numb_seal');
            $table->integer('box');
            $table->integer('code');
            $table->integer('degree_wear');
            $table->text('defects')->charset('utf8');
            $table->text('warning')->charset('utf8');
            $table->dateTime('date_receipt');
            $table->dateTime('date_issue');
            $table->integer('status');
            $table->integer('pay_type');
            $table->integer('pay_status');
            $table->integer('shipment');
            $table->integer('price');
            $table->timestamps();
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->foreign('userid')
              ->references('id')
              ->on('users')
              ->onUpdate('cascade')
              ->onDelete('cascade');
          });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::table('orders', function (Blueprint $table) {
//          $table->dropForeign(['user_id']);
//        });

        Schema::dropIfExists('orders');
    }
}
