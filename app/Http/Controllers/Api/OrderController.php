<?php

namespace App\Http\Controllers\Api;

use App\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      //$orders = Order::all();
      $orders = Order::orderBy('date_receipt', 'desc')->get();

      return response()->json($orders);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $order = new Order();

      $order->user_id = 1;

      $order->order_name = $request->get('order_name');
      $order->locality = $request->get('locality');
      $order->box_numb = $request->get('box_numb');
      $order->numb_seal = $request->get('numb_seal');
      $order->type_service = $request->get('type_service');
      $order->payment_type = $request->get('payment_type');
      $order->price = $request->get('price');

      // Default values
      $order->service_id = 12;
      $order->code = 432;
      $order->degree_wear = 453;
      $order->defects = 'абс';
      $order->warning = 'деф';
      $order->date_receipt = date("Y-m-d H:i:s");
      $order->date_issue = date("Y-m-d H:i:s");
      $order->status = 342;
      $order->payment_status = 65443;
      $order->shipment = 65873;

      $order->save();

      return $order;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $order = Order::where('id_order', $id)->get();

      return response()->json($order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
  public function edit($id)
  {
//    $order = Order::find($id);
//    return response()->json($order);
  }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
