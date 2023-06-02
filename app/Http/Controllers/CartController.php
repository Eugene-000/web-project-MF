<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CartItem;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderItem;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderConfirmation;


//! Для диплома
use DateTime;


class CartController extends Controller
{
    public function getCartProducts($user_id)
    {
        $cart = User::findOrFail($user_id)->cart;
        $cartItems = $cart->cartItems()->with(['product' => function ($query) {
            $query->select('id', 'name', 'description', 'image', 'price', 'category_id');
        }, 'color' => function ($query) {
            $query->select('id', 'name');
        }, 'size' => function ($query) {
            $query->select('id', 'name');
        }])->get()->makeHidden(['created_at', 'updated_at', 'product_id', 'size_id', 'color_id']);
        
        return response()->json($cartItems, Response::HTTP_OK, [], JSON_PRETTY_PRINT);
    }

    public function addProductToCart(Request $request)
    {
        $userId = $request->input('userId');
        $productId = $request->input('productId');
        $colorId = $request->input('colorId');
        $sizeId = $request->input('sizeId');
        $quantity = $request->input('quantity');

        $user = User::findOrFail($userId);
        $cart = $user->cart;

        $cartItem = $cart->cartItems()->where([
            'product_id' => $productId,
            'color_id' => $colorId,
            'size_id' => $sizeId,
        ])->first();

        if ($cartItem) {
            $cartItem->quantity += $quantity;
            $cartItem->save();
        } else {
            $cartItem = new CartItem([
                'product_id' => $productId,
                'color_id' => $colorId,
                'size_id' => $sizeId,
                'quantity' => $quantity,
            ]);
            $cart->cartItems()->save($cartItem);
        }

        return response()->json(['message' => 'Product added to cart successfully.'], Response::HTTP_CREATED);
    }

    public function updateCartItemQuantity(Request $request, $id)
    {
        $quantity = $request->input('quantity');
        $cartItem = CartItem::findOrFail($id);

        if ($quantity > 0) {
            $cartItem->quantity = $quantity;
            $cartItem->save();
        } else {
            $cartItem->delete();
        }

        return response()->json(['message' => 'Cart item quantity updated successfully.'], Response::HTTP_OK);
    }

    public function deleteCartItem($id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->delete();

        return response()->json(['message' => 'Cart item delete successfully.'], Response::HTTP_OK);
    }

    //! Для диплома
    public function getSystemData(Request $request)
    {
        $data = [
              [
                "end_time"=> "2023-05-19 17:24:38",
                "id"=>130,
                "module_name"=>"GUI",
                "session_id"=>130,
                "start_time"=>"2023-05-19 17:24:31",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:25:12",
                "id"=>131,
                "module_name"=>"GUI",
                "session_id"=>131,
                "start_time"=>"2023-05-19 17:24:39",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:29:18",
                "id"=>132,
                "module_name"=>"GUI",
                "session_id"=>132,
                "start_time"=>"2023-05-19 17:25:13",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-22 14:49:52",
                "id"=>135,
                "module_name"=>"GUI",
                "session_id"=>135,
                "start_time"=>"2023-05-19 17:39:56",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:42:05",
                "id"=>136,
                "module_name"=>"GUI",
                "session_id"=>136,
                "start_time"=>"2023-05-19 17:42:01",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:46:21",
                "id"=>137,
                "module_name"=>"GUI",
                "session_id"=>137,
                "start_time"=>"2023-05-19 17:42:07",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:42:25",
                "id"=>138,
                "module_name"=>"Translator",
                "session_id"=>137,
                "start_time"=>"2023-05-19 17:42:19",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 17:42:28",
                "id"=>139,
                "module_name"=>"Linguist",
                "session_id"=>137,
                "start_time"=>"2023-05-19 17:42:25",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 17:42:28",
                "id"=>140,
                "module_name"=>"Zigmund",
                "session_id"=>137,
                "start_time"=>"2023-05-19 17:42:28",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 17:42:50",
                "id"=>141,
                "module_name"=>"Gateway INS",
                "session_id"=>137,
                "start_time"=>"2023-05-19 17:42:28",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-19 17:46:29",
                "id"=>142,
                "module_name"=>"GUI",
                "session_id"=>142,
                "start_time"=>"2023-05-19 17:46:25",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:56:49",
                "id"=>143,
                "module_name"=>"GUI",
                "session_id"=>143,
                "start_time"=>"2023-05-19 17:46:32",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:46:46",
                "id"=>144,
                "module_name"=>"Translator",
                "session_id"=>143,
                "start_time"=>"2023-05-19 17:46:44",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 17:46:49",
                "id"=>145,
                "module_name"=>"Linguist",
                "session_id"=>143,
                "start_time"=>"2023-05-19 17:46:46",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 17:46:49",
                "id"=>146,
                "module_name"=>"Zigmund",
                "session_id"=>143,
                "start_time"=>"2023-05-19 17:46:49",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 17:47:07",
                "id"=>147,
                "module_name"=>"Gateway INS",
                "session_id"=>143,
                "start_time"=>"2023-05-19 17:46:49",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-19 17:53:22",
                "id"=>148,
                "module_name"=>"GUI",
                "session_id"=>148,
                "start_time"=>"2023-05-19 17:53:19",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:56:30",
                "id"=>149,
                "module_name"=>"GUI",
                "session_id"=>149,
                "start_time"=>"2023-05-19 17:54:30",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 17:55:03",
                "id"=>150,
                "module_name"=>"Translator",
                "session_id"=>149,
                "start_time"=>"2023-05-19 17:54:57",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 17:55:06",
                "id"=>151,
                "module_name"=>"Linguist",
                "session_id"=>149,
                "start_time"=>"2023-05-19 17:55:03",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 17:55:06",
                "id"=>152,
                "module_name"=>"Zigmund",
                "session_id"=>149,
                "start_time"=>"2023-05-19 17:55:06",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 17:55:25",
                "id"=>153,
                "module_name"=>"Gateway INS",
                "session_id"=>149,
                "start_time"=>"2023-05-19 17:55:06",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 18:01:06",
                "id"=>154,
                "module_name"=>"GUI",
                "session_id"=>154,
                "start_time"=>"2023-05-19 18:00:49",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 18:02:20",
                "id"=>155,
                "module_name"=>"GUI",
                "session_id"=>155,
                "start_time"=>"2023-05-19 18:02:18",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 18:25:59",
                "id"=>156,
                "module_name"=>"GUI",
                "session_id"=>156,
                "start_time"=>"2023-05-19 18:25:58",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 18:28:14",
                "id"=>157,
                "module_name"=>"GUI",
                "session_id"=>157,
                "start_time"=>"2023-05-19 18:26:06",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-19 18:26:23",
                "id"=>158,
                "module_name"=>"Translator",
                "session_id"=>157,
                "start_time"=>"2023-05-19 18:26:19",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 18:26:26",
                "id"=>159,
                "module_name"=>"Linguist",
                "session_id"=>157,
                "start_time"=>"2023-05-19 18:26:23",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 18:26:26",
                "id"=>160,
                "module_name"=>"Zigmund",
                "session_id"=>157,
                "start_time"=>"2023-05-19 18:26:26",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 18:26:45",
                "id"=>161,
                "module_name"=>"Gateway INS",
                "session_id"=>157,
                "start_time"=>"2023-05-19 18:26:27",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 18:28:47",
                "id"=>163,
                "module_name"=>"Translator",
                "session_id"=>162,
                "start_time"=>"2023-05-19 18:28:45",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 18:28:50",
                "id"=>164,
                "module_name"=>"Linguist",
                "session_id"=>162,
                "start_time"=>"2023-05-19 18:28:47",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 18:28:50",
                "id"=>165,
                "module_name"=>"Zigmund",
                "session_id"=>162,
                "start_time"=>"2023-05-19 18:28:50",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 18:29:07",
                "id"=>166,
                "module_name"=>"Gateway INS",
                "session_id"=>162,
                "start_time"=>"2023-05-19 18:28:50",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 18:32:33",
                "id"=>169,
                "module_name"=>"Translator",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:32:29",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 18:32:35",
                "id"=>170,
                "module_name"=>"Linguist",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:32:33",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 18:32:37",
                "id"=>172,
                "module_name"=>"Zigmund",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:32:35",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 18:32:54",
                "id"=>173,
                "module_name"=>"Gateway INS",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:32:37",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:07",
                "id"=>174,
                "module_name"=>"Translator",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:46:59",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:13",
                "id"=>175,
                "module_name"=>"Linguist",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:47:07",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:07",
                "id"=>176,
                "module_name"=>"Translator",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:46:59",
                "status"=>"NT3"
              ],
              [
                "end_time"=>"2023-05-19 18:47:13",
                "id"=>177,
                "module_name"=>"Linguist",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:47:07",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:17",
                "id"=>178,
                "module_name"=>"Zigmund",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:47:13",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:38",
                "id"=>179,
                "module_name"=>"Gateway INS",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:47:19",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:19",
                "id"=>180,
                "module_name"=>"Zigmund",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:47:13",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 18:47:38",
                "id"=>181,
                "module_name"=>"Gateway INS",
                "session_id"=>168,
                "start_time"=>"2023-05-19 18:47:20",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 19:49:55",
                "id"=>185,
                "module_name"=>"Translator",
                "session_id"=>184,
                "start_time"=>"2023-05-19 19:49:51",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 19:49:57",
                "id"=>186,
                "module_name"=>"Linguist",
                "session_id"=>184,
                "start_time"=>"2023-05-19 19:49:55",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 19:49:58",
                "id"=>187,
                "module_name"=>"Zigmund",
                "session_id"=>184,
                "start_time"=>"2023-05-19 19:49:57",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 19:50:18",
                "id"=>188,
                "module_name"=>"Gateway INS",
                "session_id"=>184,
                "start_time"=>"2023-05-19 19:49:58",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-19 19:52:15",
                "id"=>190,
                "module_name"=>"Translator",
                "session_id"=>189,
                "start_time"=>"2023-05-19 19:52:11",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 19:52:18",
                "id"=>191,
                "module_name"=>"Linguist",
                "session_id"=>189,
                "start_time"=>"2023-05-19 19:52:15",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 19:52:18",
                "id"=>192,
                "module_name"=>"Zigmund",
                "session_id"=>189,
                "start_time"=>"2023-05-19 19:52:18",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 19:52:26",
                "id"=>193,
                "module_name"=>"Gateway INS",
                "session_id"=>189,
                "start_time"=>"2023-05-19 19:52:18",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-19 19:52:54",
                "id"=>195,
                "module_name"=>"Translator",
                "session_id"=>194,
                "start_time"=>"2023-05-19 19:52:52",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 19:52:57",
                "id"=>196,
                "module_name"=>"Linguist",
                "session_id"=>194,
                "start_time"=>"2023-05-19 19:52:54",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 19:52:57",
                "id"=>197,
                "module_name"=>"Zigmund",
                "session_id"=>194,
                "start_time"=>"2023-05-19 19:52:57",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 19:53:09",
                "id"=>198,
                "module_name"=>"Gateway INS",
                "session_id"=>194,
                "start_time"=>"2023-05-19 19:52:57",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 19:57:32",
                "id"=>200,
                "module_name"=>"Translator",
                "session_id"=>199,
                "start_time"=>"2023-05-19 19:57:29",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 19:57:35",
                "id"=>201,
                "module_name"=>"Linguist",
                "session_id"=>199,
                "start_time"=>"2023-05-19 19:57:32",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 19:57:35",
                "id"=>202,
                "module_name"=>"Zigmund",
                "session_id"=>199,
                "start_time"=>"2023-05-19 19:57:35",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 19:57:53",
                "id"=>203,
                "module_name"=>"Gateway INS",
                "session_id"=>199,
                "start_time"=>"2023-05-19 19:57:36",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:04:18",
                "id"=>209,
                "module_name"=>"Translator",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:04:15",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:04:20",
                "id"=>210,
                "module_name"=>"Linguist",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:04:18",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:04:21",
                "id"=>211,
                "module_name"=>"Zigmund",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:04:20",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:04:39",
                "id"=>212,
                "module_name"=>"Gateway INS",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:04:21",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:04:51",
                "id"=>214,
                "module_name"=>"Translator",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:04:47",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:04:54",
                "id"=>215,
                "module_name"=>"Linguist",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:04:51",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:04:56",
                "id"=>216,
                "module_name"=>"Zigmund",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:04:54",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:05:14",
                "id"=>217,
                "module_name"=>"Gateway INS",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:04:56",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:07:06",
                "id"=>218,
                "module_name"=>"Translator",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:07:03",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:07:09",
                "id"=>219,
                "module_name"=>"Linguist",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:07:06",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:07:09",
                "id"=>220,
                "module_name"=>"Zigmund",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:07:09",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:07:27",
                "id"=>221,
                "module_name"=>"Gateway INS",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:07:09",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:08:13",
                "id"=>222,
                "module_name"=>"Translator",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:08:10",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:08:16",
                "id"=>223,
                "module_name"=>"Linguist",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:08:13",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:08:17",
                "id"=>224,
                "module_name"=>"Zigmund",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:08:16",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:08:35",
                "id"=>225,
                "module_name"=>"Gateway INS",
                "session_id"=>207,
                "start_time"=>"2023-05-19 20:08:17",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:08:48",
                "id"=>226,
                "module_name"=>"Translator",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:08:45",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:08:51",
                "id"=>227,
                "module_name"=>"Linguist",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:08:48",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:08:53",
                "id"=>228,
                "module_name"=>"Zigmund",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:08:51",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:09:10",
                "id"=>229,
                "module_name"=>"Gateway INS",
                "session_id"=>208,
                "start_time"=>"2023-05-19 20:08:53",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:11:38",
                "id"=>232,
                "module_name"=>"Translator",
                "session_id"=>230,
                "start_time"=>"2023-05-19 20:11:35",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:11:41",
                "id"=>233,
                "module_name"=>"Linguist",
                "session_id"=>230,
                "start_time"=>"2023-05-19 20:11:38",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:11:41",
                "id"=>235,
                "module_name"=>"Zigmund",
                "session_id"=>230,
                "start_time"=>"2023-05-19 20:11:41",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:12:00",
                "id"=>236,
                "module_name"=>"Gateway INS",
                "session_id"=>230,
                "start_time"=>"2023-05-19 20:11:41",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:12:33",
                "id"=>237,
                "module_name"=>"Translator",
                "session_id"=>234,
                "start_time"=>"2023-05-19 20:12:30",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:12:36",
                "id"=>238,
                "module_name"=>"Linguist",
                "session_id"=>234,
                "start_time"=>"2023-05-19 20:12:33",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:12:36",
                "id"=>239,
                "module_name"=>"Zigmund",
                "session_id"=>234,
                "start_time"=>"2023-05-19 20:12:36",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:12:53",
                "id"=>240,
                "module_name"=>"Gateway INS",
                "session_id"=>234,
                "start_time"=>"2023-05-19 20:12:36",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:16:38",
                "id"=>242,
                "module_name"=>"Translator",
                "session_id"=>241,
                "start_time"=>"2023-05-19 20:16:34",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:16:41",
                "id"=>243,
                "module_name"=>"Linguist",
                "session_id"=>241,
                "start_time"=>"2023-05-19 20:16:38",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:16:43",
                "id"=>244,
                "module_name"=>"Zigmund",
                "session_id"=>241,
                "start_time"=>"2023-05-19 20:16:41",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:17:02",
                "id"=>245,
                "module_name"=>"Gateway INS",
                "session_id"=>241,
                "start_time"=>"2023-05-19 20:16:43",
                "status"=>"E205"
              ],
              [
                "end_time"=>"2023-05-19 20:48:26",
                "id"=>247,
                "module_name"=>"Translator",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:48:24",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:48:28",
                "id"=>248,
                "module_name"=>"Linguist",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:48:26",
                "status"=>"NL3"
              ],
              [
                "end_time"=>"2023-05-19 20:48:28",
                "id"=>249,
                "module_name"=>"Zigmund",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:48:28",
                "status"=>"NZ1"
              ],
              [
                "end_time"=>"2023-05-19 20:48:28",
                "id"=>250,
                "module_name"=>"Gateway INS",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:48:28",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 20:49:55",
                "id"=>253,
                "module_name"=>"Translator",
                "session_id"=>252,
                "start_time"=>"2023-05-19 20:49:53",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:49:58",
                "id"=>254,
                "module_name"=>"Linguist",
                "session_id"=>252,
                "start_time"=>"2023-05-19 20:49:55",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:49:58",
                "id"=>255,
                "module_name"=>"Zigmund",
                "session_id"=>252,
                "start_time"=>"2023-05-19 20:49:58",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:50:16",
                "id"=>256,
                "module_name"=>"Gateway INS",
                "session_id"=>252,
                "start_time"=>"2023-05-19 20:49:58",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 20:50:48",
                "id"=>257,
                "module_name"=>"Translator",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:50:45",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 20:50:51",
                "id"=>258,
                "module_name"=>"Linguist",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:50:48",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 20:50:52",
                "id"=>259,
                "module_name"=>"Zigmund",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:50:51",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 20:51:09",
                "id"=>260,
                "module_name"=>"Gateway INS",
                "session_id"=>246,
                "start_time"=>"2023-05-19 20:50:52",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 21:05:43",
                "id"=>264,
                "module_name"=>"Translator",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:05:41",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 21:05:46",
                "id"=>265,
                "module_name"=>"Linguist",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:05:43",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 21:05:46",
                "id"=>266,
                "module_name"=>"Zigmund",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:05:46",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 21:06:05",
                "id"=>267,
                "module_name"=>"Gateway INS",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:05:46",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 21:09:24",
                "id"=>269,
                "module_name"=>"Translator",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:09:22",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 21:09:26",
                "id"=>270,
                "module_name"=>"Linguist",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:09:24",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 21:09:27",
                "id"=>271,
                "module_name"=>"Zigmund",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:09:26",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 21:09:48",
                "id"=>272,
                "module_name"=>"Gateway INS",
                "session_id"=>263,
                "start_time"=>"2023-05-19 21:09:27",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 21:44:41",
                "id"=>277,
                "module_name"=>"Translator",
                "session_id"=>276,
                "start_time"=>"2023-05-19 21:44:39",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 21:44:44",
                "id"=>278,
                "module_name"=>"Linguist",
                "session_id"=>276,
                "start_time"=>"2023-05-19 21:44:41",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 21:44:44",
                "id"=>279,
                "module_name"=>"Zigmund",
                "session_id"=>276,
                "start_time"=>"2023-05-19 21:44:44",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 21:45:03",
                "id"=>280,
                "module_name"=>"Gateway INS",
                "session_id"=>276,
                "start_time"=>"2023-05-19 21:44:44",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 21:58:59",
                "id"=>284,
                "module_name"=>"Translator",
                "session_id"=>283,
                "start_time"=>"2023-05-19 21:58:56",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 21:59:02",
                "id"=>285,
                "module_name"=>"Linguist",
                "session_id"=>283,
                "start_time"=>"2023-05-19 21:58:59",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 21:59:03",
                "id"=>286,
                "module_name"=>"Zigmund",
                "session_id"=>283,
                "start_time"=>"2023-05-19 21:59:02",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 21:59:21",
                "id"=>287,
                "module_name"=>"Gateway INS",
                "session_id"=>283,
                "start_time"=>"2023-05-19 21:59:03",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 22:01:08",
                "id"=>288,
                "module_name"=>"Translator",
                "session_id"=>283,
                "start_time"=>"2023-05-19 22:01:05",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 22:01:10",
                "id"=>289,
                "module_name"=>"Linguist",
                "session_id"=>283,
                "start_time"=>"2023-05-19 22:01:08",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 22:01:10",
                "id"=>290,
                "module_name"=>"Zigmund",
                "session_id"=>283,
                "start_time"=>"2023-05-19 22:01:10",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 22:01:29",
                "id"=>291,
                "module_name"=>"Gateway INS",
                "session_id"=>283,
                "start_time"=>"2023-05-19 22:01:10",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 23:13:54",
                "id"=>294,
                "module_name"=>"Translator",
                "session_id"=>293,
                "start_time"=>"2023-05-19 23:13:51",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 23:13:57",
                "id"=>295,
                "module_name"=>"Linguist",
                "session_id"=>293,
                "start_time"=>"2023-05-19 23:13:54",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 23:13:58",
                "id"=>296,
                "module_name"=>"Zigmund",
                "session_id"=>293,
                "start_time"=>"2023-05-19 23:13:57",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 23:14:16",
                "id"=>297,
                "module_name"=>"Gateway INS",
                "session_id"=>293,
                "start_time"=>"2023-05-19 23:13:58",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 23:18:18",
                "id"=>299,
                "module_name"=>"Translator",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:18:16",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 23:18:21",
                "id"=>300,
                "module_name"=>"Linguist",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:18:18",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 23:18:22",
                "id"=>301,
                "module_name"=>"Zigmund",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:18:21",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 23:18:41",
                "id"=>302,
                "module_name"=>"Gateway INS",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:18:22",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 23:21:09",
                "id"=>303,
                "module_name"=>"Translator",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:21:07",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 23:21:12",
                "id"=>304,
                "module_name"=>"Linguist",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:21:09",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 23:21:13",
                "id"=>305,
                "module_name"=>"Zigmund",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:21:12",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 23:21:31",
                "id"=>306,
                "module_name"=>"Gateway INS",
                "session_id"=>298,
                "start_time"=>"2023-05-19 23:21:13",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 23:26:16",
                "id"=>308,
                "module_name"=>"Translator",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:26:12",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 23:26:19",
                "id"=>309,
                "module_name"=>"Linguist",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:26:16",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 23:26:21",
                "id"=>310,
                "module_name"=>"Zigmund",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:26:20",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 23:26:42",
                "id"=>311,
                "module_name"=>"Gateway INS",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:26:21",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 23:27:59",
                "id"=>312,
                "module_name"=>"Translator",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:27:55",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 23:28:02",
                "id"=>313,
                "module_name"=>"Linguist",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:27:59",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 23:28:03",
                "id"=>314,
                "module_name"=>"Zigmund",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:28:02",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 23:28:22",
                "id"=>315,
                "module_name"=>"Gateway INS",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:28:03",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-19 23:29:52",
                "id"=>316,
                "module_name"=>"Translator",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:29:50",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-19 23:29:55",
                "id"=>317,
                "module_name"=>"Linguist",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:29:52",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-19 23:29:55",
                "id"=>318,
                "module_name"=>"Zigmund",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:29:55",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-19 23:30:13",
                "id"=>319,
                "module_name"=>"Gateway INS",
                "session_id"=>307,
                "start_time"=>"2023-05-19 23:29:55",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:11:55",
                "id"=>321,
                "module_name"=>"Translator",
                "session_id"=>320,
                "start_time"=>"2023-05-20 00:11:53",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:11:59",
                "id"=>322,
                "module_name"=>"Linguist",
                "session_id"=>320,
                "start_time"=>"2023-05-20 00:11:55",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:11:59",
                "id"=>323,
                "module_name"=>"Zigmund",
                "session_id"=>320,
                "start_time"=>"2023-05-20 00:11:59",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:12:17",
                "id"=>324,
                "module_name"=>"Gateway INS",
                "session_id"=>320,
                "start_time"=>"2023-05-20 00:11:59",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:59:46",
                "id"=>325,
                "module_name"=>"GUI",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:41:19",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-20 00:44:04",
                "id"=>327,
                "module_name"=>"Translator",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:44:01",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:44:07",
                "id"=>328,
                "module_name"=>"Linguist",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:44:04",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:44:07",
                "id"=>329,
                "module_name"=>"Zigmund",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:44:07",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:44:26",
                "id"=>330,
                "module_name"=>"Gateway INS",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:44:07",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:49:14",
                "id"=>331,
                "module_name"=>"Translator",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:49:12",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:49:17",
                "id"=>332,
                "module_name"=>"Linguist",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:49:14",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:49:17",
                "id"=>333,
                "module_name"=>"Zigmund",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:49:17",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:49:35",
                "id"=>334,
                "module_name"=>"Gateway INS",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:49:17",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:51:31",
                "id"=>335,
                "module_name"=>"Translator",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:51:28",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:51:34",
                "id"=>336,
                "module_name"=>"Linguist",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:51:31",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:51:35",
                "id"=>337,
                "module_name"=>"Zigmund",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:51:34",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:51:53",
                "id"=>338,
                "module_name"=>"Gateway INS",
                "session_id"=>326,
                "start_time"=>"2023-05-20 00:51:35",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:54:04",
                "id"=>339,
                "module_name"=>"Translator",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:54:00",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:54:07",
                "id"=>340,
                "module_name"=>"Linguist",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:54:04",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:54:08",
                "id"=>341,
                "module_name"=>"Zigmund",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:54:07",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:54:31",
                "id"=>342,
                "module_name"=>"Gateway INS",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:54:08",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:55:21",
                "id"=>343,
                "module_name"=>"Translator",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:55:18",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:55:23",
                "id"=>344,
                "module_name"=>"Linguist",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:55:21",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:55:24",
                "id"=>345,
                "module_name"=>"Zigmund",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:55:23",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:55:42",
                "id"=>346,
                "module_name"=>"Gateway INS",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:55:24",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 00:58:44",
                "id"=>348,
                "module_name"=>"Translator",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:58:41",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 00:58:47",
                "id"=>349,
                "module_name"=>"Linguist",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:58:44",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 00:58:48",
                "id"=>350,
                "module_name"=>"Zigmund",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:58:47",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 00:59:04",
                "id"=>351,
                "module_name"=>"Gateway INS",
                "session_id"=>325,
                "start_time"=>"2023-05-20 00:58:48",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:12:01",
                "id"=>352,
                "module_name"=>"GUI",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:07:09",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-20 01:07:34",
                "id"=>354,
                "module_name"=>"Translator",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:07:31",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:07:37",
                "id"=>355,
                "module_name"=>"Linguist",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:07:34",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:07:49",
                "id"=>356,
                "module_name"=>"Translator",
                "session_id"=>353,
                "start_time"=>"2023-05-20 01:07:46",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:07:51",
                "id"=>357,
                "module_name"=>"Linguist",
                "session_id"=>353,
                "start_time"=>"2023-05-20 01:07:49",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:07:39",
                "id"=>358,
                "module_name"=>"Zigmund",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:07:37",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:07:57",
                "id"=>359,
                "module_name"=>"Gateway INS",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:07:39",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:07:52",
                "id"=>360,
                "module_name"=>"Zigmund",
                "session_id"=>353,
                "start_time"=>"2023-05-20 01:07:51",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:08:09",
                "id"=>361,
                "module_name"=>"Gateway INS",
                "session_id"=>353,
                "start_time"=>"2023-05-20 01:07:52",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:11:18",
                "id"=>363,
                "module_name"=>"Translator",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:11:13",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:11:21",
                "id"=>364,
                "module_name"=>"Linguist",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:11:18",
                "status"=>"NL3"
              ],
              [
                "end_time"=>"2023-05-20 01:11:21",
                "id"=>365,
                "module_name"=>"Zigmund",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:11:21",
                "status"=>"NZ1"
              ],
              [
                "end_time"=>"2023-05-20 01:11:21",
                "id"=>366,
                "module_name"=>"Gateway INS",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:11:21",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:11:27",
                "id"=>367,
                "module_name"=>"Translator",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:11:25",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:11:30",
                "id"=>368,
                "module_name"=>"Linguist",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:11:27",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:11:31",
                "id"=>369,
                "module_name"=>"Zigmund",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:11:30",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:11:48",
                "id"=>370,
                "module_name"=>"Gateway INS",
                "session_id"=>352,
                "start_time"=>"2023-05-20 01:11:31",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:12:22",
                "id"=>371,
                "module_name"=>"Translator",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:12:19",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:12:24",
                "id"=>372,
                "module_name"=>"Linguist",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:12:22",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:12:24",
                "id"=>373,
                "module_name"=>"Zigmund",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:12:24",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:12:44",
                "id"=>374,
                "module_name"=>"Gateway INS",
                "session_id"=>362,
                "start_time"=>"2023-05-20 01:12:24",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:17:50",
                "id"=>377,
                "module_name"=>"Translator",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:17:47",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:17:52",
                "id"=>378,
                "module_name"=>"Linguist",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:17:50",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:17:53",
                "id"=>379,
                "module_name"=>"Zigmund",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:17:52",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:18:11",
                "id"=>380,
                "module_name"=>"Gateway INS",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:17:53",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:22:54",
                "id"=>381,
                "module_name"=>"Translator",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:22:52",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:22:57",
                "id"=>382,
                "module_name"=>"Linguist",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:22:54",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:22:58",
                "id"=>383,
                "module_name"=>"Zigmund",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:22:57",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:23:16",
                "id"=>384,
                "module_name"=>"Gateway INS",
                "session_id"=>376,
                "start_time"=>"2023-05-20 01:22:58",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:25:44",
                "id"=>386,
                "module_name"=>"Translator",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:25:42",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:25:46",
                "id"=>387,
                "module_name"=>"Linguist",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:25:44",
                "status"=>"NL3"
              ],
              [
                "end_time"=>"2023-05-20 01:25:46",
                "id"=>388,
                "module_name"=>"Zigmund",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:25:46",
                "status"=>"NZ1"
              ],
              [
                "end_time"=>"2023-05-20 01:25:46",
                "id"=>389,
                "module_name"=>"Gateway INS",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:25:46",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-20 01:29:32",
                "id"=>390,
                "module_name"=>"GUI",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:09",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:18",
                "id"=>391,
                "module_name"=>"Translator",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:16",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:21",
                "id"=>392,
                "module_name"=>"Linguist",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:18",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:20",
                "id"=>393,
                "module_name"=>"Translator",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:26:17",
                "status"=>"NT3"
              ],
              [
                "end_time"=>"2023-05-20 01:26:25",
                "id"=>394,
                "module_name"=>"Linguist",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:26:20",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:23",
                "id"=>395,
                "module_name"=>"Zigmund",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:21",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:42",
                "id"=>396,
                "module_name"=>"Gateway INS",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:23",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-20 01:26:25",
                "id"=>397,
                "module_name"=>"Zigmund",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:26:25",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:43",
                "id"=>398,
                "module_name"=>"Gateway INS",
                "session_id"=>385,
                "start_time"=>"2023-05-20 01:26:26",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-20 01:26:56",
                "id"=>399,
                "module_name"=>"Translator",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:54",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:26:59",
                "id"=>400,
                "module_name"=>"Linguist",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:56",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:27:00",
                "id"=>401,
                "module_name"=>"Zigmund",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:26:59",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:27:18",
                "id"=>402,
                "module_name"=>"Gateway INS",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:27:00",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-20 01:27:41",
                "id"=>404,
                "module_name"=>"Translator",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:27:39",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:27:44",
                "id"=>405,
                "module_name"=>"Linguist",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:27:41",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:27:45",
                "id"=>406,
                "module_name"=>"Zigmund",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:27:44",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:28:03",
                "id"=>407,
                "module_name"=>"Gateway INS",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:27:45",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-20 01:28:19",
                "id"=>408,
                "module_name"=>"Translator",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:28:16",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:28:21",
                "id"=>409,
                "module_name"=>"Linguist",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:28:19",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:28:21",
                "id"=>410,
                "module_name"=>"Zigmund",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:28:21",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:28:53",
                "id"=>411,
                "module_name"=>"Gateway INS",
                "session_id"=>390,
                "start_time"=>"2023-05-20 01:28:21",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-20 01:38:42",
                "id"=>413,
                "module_name"=>"Translator",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:38:39",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:38:45",
                "id"=>414,
                "module_name"=>"Linguist",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:38:42",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:38:45",
                "id"=>415,
                "module_name"=>"Zigmund",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:38:45",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:39:03",
                "id"=>416,
                "module_name"=>"Gateway INS",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:38:45",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-20 01:40:10",
                "id"=>417,
                "module_name"=>"Translator",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:40:07",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-20 01:40:13",
                "id"=>418,
                "module_name"=>"Linguist",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:40:10",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-20 01:40:13",
                "id"=>419,
                "module_name"=>"Zigmund",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:40:13",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-20 01:40:32",
                "id"=>420,
                "module_name"=>"Gateway INS",
                "session_id"=>412,
                "start_time"=>"2023-05-20 01:40:13",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-21 02:56:09",
                "id"=>429,
                "module_name"=>"Translator",
                "session_id"=>428,
                "start_time"=>"2023-05-21 02:56:06",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-21 02:56:12",
                "id"=>430,
                "module_name"=>"Linguist",
                "session_id"=>428,
                "start_time"=>"2023-05-21 02:56:09",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-21 02:56:12",
                "id"=>431,
                "module_name"=>"Zigmund",
                "session_id"=>428,
                "start_time"=>"2023-05-21 02:56:12",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-21 02:56:31",
                "id"=>432,
                "module_name"=>"Gateway INS",
                "session_id"=>428,
                "start_time"=>"2023-05-21 02:56:12",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-21 13:45:59",
                "id"=>438,
                "module_name"=>"Translator",
                "session_id"=>437,
                "start_time"=>"2023-05-21 13:45:56",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-21 13:46:05",
                "id"=>439,
                "module_name"=>"Linguist",
                "session_id"=>437,
                "start_time"=>"2023-05-21 13:45:59",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-21 13:46:06",
                "id"=>440,
                "module_name"=>"Zigmund",
                "session_id"=>437,
                "start_time"=>"2023-05-21 13:46:06",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-21 13:46:26",
                "id"=>441,
                "module_name"=>"Gateway INS",
                "session_id"=>437,
                "start_time"=>"2023-05-21 13:46:06",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-22 14:38:37",
                "id"=>442,
                "module_name"=>"GUI",
                "session_id"=>442,
                "start_time"=>"2023-05-22 14:38:36",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-22 14:58:08",
                "id"=>443,
                "module_name"=>"GUI",
                "session_id"=>443,
                "start_time"=>"2023-05-22 14:58:07",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-22 15:44:15",
                "id"=>444,
                "module_name"=>"GUI",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:41:21",
                "status"=>"0"
              ],
              [
                "end_time"=>"2023-05-22 15:41:38",
                "id"=>445,
                "module_name"=>"Translator",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:41:31",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-22 15:41:40",
                "id"=>446,
                "module_name"=>"Linguist",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:41:38",
                "status"=>"NL3"
              ],
              [
                "end_time"=>"2023-05-22 15:41:40",
                "id"=>447,
                "module_name"=>"Zigmund",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:41:40",
                "status"=>"NZ1"
              ],
              [
                "end_time"=>"2023-05-22 15:41:40",
                "id"=>448,
                "module_name"=>"Gateway INS",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:41:40",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-22 15:43:21",
                "id"=>449,
                "module_name"=>"Translator",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:19",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-22 15:43:24",
                "id"=>450,
                "module_name"=>"Linguist",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:21",
                "status"=>"NL3"
              ],
              [
                "end_time"=>"2023-05-22 15:43:24",
                "id"=>451,
                "module_name"=>"Zigmund",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:24",
                "status"=>"NZ1"
              ],
              [
                "end_time"=>"2023-05-22 15:43:24",
                "id"=>452,
                "module_name"=>"Gateway INS",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:24",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-22 15:43:43",
                "id"=>453,
                "module_name"=>"Translator",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:41",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-22 15:43:46",
                "id"=>454,
                "module_name"=>"Linguist",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:43",
                "status"=>"NL3"
              ],
              [
                "end_time"=>"2023-05-22 15:43:46",
                "id"=>455,
                "module_name"=>"Zigmund",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:46",
                "status"=>"NZ1"
              ],
              [
                "end_time"=>"2023-05-22 15:43:46",
                "id"=>456,
                "module_name"=>"Gateway INS",
                "session_id"=>444,
                "start_time"=>"2023-05-22 15:43:46",
                "status"=>"E53"
              ],
              [
                "end_time"=>"2023-05-22 15:44:45",
                "id"=>458,
                "module_name"=>"Translator",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:44:42",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-22 15:44:47",
                "id"=>459,
                "module_name"=>"Linguist",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:44:45",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-22 15:44:47",
                "id"=>460,
                "module_name"=>"Zigmund",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:44:47",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-22 15:45:05",
                "id"=>461,
                "module_name"=>"Gateway INS",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:44:47",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-22 15:45:09",
                "id"=>462,
                "module_name"=>"Translator",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:45:07",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-22 15:45:13",
                "id"=>463,
                "module_name"=>"Linguist",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:45:09",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-22 15:45:13",
                "id"=>464,
                "module_name"=>"Zigmund",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:45:13",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-22 15:45:30",
                "id"=>465,
                "module_name"=>"Gateway INS",
                "session_id"=>457,
                "start_time"=>"2023-05-22 15:45:13",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-23 06:54:56",
                "id"=>471,
                "module_name"=>"Translator",
                "session_id"=>470,
                "start_time"=>"2023-05-23 06:54:45",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 06:54:59",
                "id"=>472,
                "module_name"=>"Linguist",
                "session_id"=>470,
                "start_time"=>"2023-05-23 06:54:56",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 06:55:03",
                "id"=>473,
                "module_name"=>"Zigmund",
                "session_id"=>470,
                "start_time"=>"2023-05-23 06:54:59",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 06:55:24",
                "id"=>474,
                "module_name"=>"Gateway INS",
                "session_id"=>470,
                "start_time"=>"2023-05-23 06:55:03",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-23 07:00:25",
                "id"=>476,
                "module_name"=>"Translator",
                "session_id"=>475,
                "start_time"=>"2023-05-23 07:00:15",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 07:00:28",
                "id"=>477,
                "module_name"=>"Linguist",
                "session_id"=>475,
                "start_time"=>"2023-05-23 07:00:25",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 07:00:32",
                "id"=>478,
                "module_name"=>"Zigmund",
                "session_id"=>475,
                "start_time"=>"2023-05-23 07:00:28",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 07:00:54",
                "id"=>479,
                "module_name"=>"Gateway INS",
                "session_id"=>475,
                "start_time"=>"2023-05-23 07:00:32",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-23 09:44:37",
                "id"=>482,
                "module_name"=>"Translator",
                "session_id"=>481,
                "start_time"=>"2023-05-23 09:44:34",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 09:44:40",
                "id"=>483,
                "module_name"=>"Linguist",
                "session_id"=>481,
                "start_time"=>"2023-05-23 09:44:37",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 09:44:40",
                "id"=>484,
                "module_name"=>"Zigmund",
                "session_id"=>481,
                "start_time"=>"2023-05-23 09:44:40",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 09:45:03",
                "id"=>485,
                "module_name"=>"Gateway INS",
                "session_id"=>481,
                "start_time"=>"2023-05-23 09:44:40",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-23 13:11:39",
                "id"=>487,
                "module_name"=>"Translator",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:11:37",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 13:11:42",
                "id"=>488,
                "module_name"=>"Linguist",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:11:39",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 13:11:43",
                "id"=>489,
                "module_name"=>"Zigmund",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:11:42",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 13:12:01",
                "id"=>490,
                "module_name"=>"Gateway INS",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:11:43",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-23 13:12:29",
                "id"=>491,
                "module_name"=>"Translator",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:12:26",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 13:12:32",
                "id"=>492,
                "module_name"=>"Linguist",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:12:29",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 13:12:32",
                "id"=>493,
                "module_name"=>"Zigmund",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:12:32",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 13:12:50",
                "id"=>494,
                "module_name"=>"Gateway INS",
                "session_id"=>486,
                "start_time"=>"2023-05-23 13:12:32",
                "status"=>"E32"
              ],
              [
                "end_time"=>"2023-05-23 17:42:04",
                "id"=>502,
                "module_name"=>"Translator",
                "session_id"=>501,
                "start_time"=>"2023-05-23 17:41:59",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 17:42:07",
                "id"=>503,
                "module_name"=>"Linguist",
                "session_id"=>501,
                "start_time"=>"2023-05-23 17:42:04",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 17:42:07",
                "id"=>504,
                "module_name"=>"Zigmund",
                "session_id"=>501,
                "start_time"=>"2023-05-23 17:42:07",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 17:42:26",
                "id"=>505,
                "module_name"=>"Gateway INS",
                "session_id"=>501,
                "start_time"=>"2023-05-23 17:42:07",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-23 17:57:59",
                "id"=>510,
                "module_name"=>"Translator",
                "session_id"=>508,
                "start_time"=>"2023-05-23 17:57:54",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 17:58:02",
                "id"=>511,
                "module_name"=>"Linguist",
                "session_id"=>508,
                "start_time"=>"2023-05-23 17:57:59",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 17:58:03",
                "id"=>512,
                "module_name"=>"Zigmund",
                "session_id"=>508,
                "start_time"=>"2023-05-23 17:58:02",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 17:58:22",
                "id"=>513,
                "module_name"=>"Gateway INS",
                "session_id"=>508,
                "start_time"=>"2023-05-23 17:58:03",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-23 18:17:58",
                "id"=>517,
                "module_name"=>"Translator",
                "session_id"=>516,
                "start_time"=>"2023-05-23 18:17:55",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 18:18:01",
                "id"=>518,
                "module_name"=>"Linguist",
                "session_id"=>516,
                "start_time"=>"2023-05-23 18:17:58",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 18:18:01",
                "id"=>519,
                "module_name"=>"Zigmund",
                "session_id"=>516,
                "start_time"=>"2023-05-23 18:18:01",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 18:18:21",
                "id"=>520,
                "module_name"=>"Gateway INS",
                "session_id"=>516,
                "start_time"=>"2023-05-23 18:18:02",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-23 19:24:15",
                "id"=>522,
                "module_name"=>"Translator",
                "session_id"=>521,
                "start_time"=>"2023-05-23 19:24:12",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 19:24:18",
                "id"=>523,
                "module_name"=>"Linguist",
                "session_id"=>521,
                "start_time"=>"2023-05-23 19:24:15",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 19:24:19",
                "id"=>524,
                "module_name"=>"Zigmund",
                "session_id"=>521,
                "start_time"=>"2023-05-23 19:24:18",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 19:24:40",
                "id"=>525,
                "module_name"=>"Gateway INS",
                "session_id"=>521,
                "start_time"=>"2023-05-23 19:24:19",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-23 19:44:33",
                "id"=>528,
                "module_name"=>"Translator",
                "session_id"=>527,
                "start_time"=>"2023-05-23 19:44:30",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 19:44:35",
                "id"=>529,
                "module_name"=>"Linguist",
                "session_id"=>527,
                "start_time"=>"2023-05-23 19:44:33",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 19:44:36",
                "id"=>530,
                "module_name"=>"Zigmund",
                "session_id"=>527,
                "start_time"=>"2023-05-23 19:44:35",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 19:44:53",
                "id"=>531,
                "module_name"=>"Gateway INS",
                "session_id"=>527,
                "start_time"=>"2023-05-23 19:44:36",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-23 19:47:43",
                "id"=>534,
                "module_name"=>"Translator",
                "session_id"=>533,
                "start_time"=>"2023-05-23 19:47:40",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 19:47:46",
                "id"=>535,
                "module_name"=>"Linguist",
                "session_id"=>533,
                "start_time"=>"2023-05-23 19:47:43",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 19:47:46",
                "id"=>536,
                "module_name"=>"Zigmund",
                "session_id"=>533,
                "start_time"=>"2023-05-23 19:47:46",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 19:48:04",
                "id"=>537,
                "module_name"=>"Gateway INS",
                "session_id"=>533,
                "start_time"=>"2023-05-23 19:47:47",
                "status"=>"E0"
              ],
              [
                "end_time"=>"2023-05-23 20:13:06",
                "id"=>539,
                "module_name"=>"Translator",
                "session_id"=>538,
                "start_time"=>"2023-05-23 20:13:03",
                "status"=>"NT0"
              ],
              [
                "end_time"=>"2023-05-23 20:13:09",
                "id"=>540,
                "module_name"=>"Linguist",
                "session_id"=>538,
                "start_time"=>"2023-05-23 20:13:06",
                "status"=>"NL0"
              ],
              [
                "end_time"=>"2023-05-23 20:13:10",
                "id"=>541,
                "module_name"=>"Zigmund",
                "session_id"=>538,
                "start_time"=>"2023-05-23 20:13:09",
                "status"=>"NZ0"
              ],
              [
                "end_time"=>"2023-05-23 20:13:28",
                "id"=>542,
                "module_name"=>"Gateway INS",
                "session_id"=>538,
                "start_time"=>"2023-05-23 20:13:10",
                "status"=>"E0"
              ]
            ]
          ;

        $data2 = [
            [
                "end_time" => "2023-05-08 15:41:47",
                "id"=> 1,
                "module_name"=> "GUI",
                "session_id"=> 1,
                "start_time"=> "2023-05-08 15:38:03",
                "status"=> "0"
            ],
            [
                "end_time"=> "2023-05-08 15:39:18",
                "id"=> 2,
                "module_name"=> "Translator",
                "session_id"=> null,
                "start_time"=> "2023-05-08 15:38:03",
                "status"=> "NT0"
            ],
            [
                "end_time"=> "2023-05-08 15:39:42",
                "id"=> 3,
                "module_name"=> "Linguist",
                "session_id"=> 1,
                "start_time"=> "2023-05-08 15:39:18",
                "status"=> "NL1"
            ],
            [
                "end_time"=> "2023-05-08 15:39:58",
                "id"=> 4,
                "module_name"=> "Zigmund",
                "session_id"=> 1,
                "start_time"=> "2023-05-08 15:39:43",
                "status"=> "NZ2"
            ],
            [
                "end_time"=> "2023-05-08 15:40:47",
                "id"=> 5,
                "module_name"=> "Gateway INS",
                "session_id"=> 1,
                "start_time"=> "2023-05-08 15:40:00",
                "status"=> "E34"
            ],
            [
                "end_time"=> "2023-05-08 16:31:47",
                "id"=> 6,
                "module_name"=> "GUI",
                "session_id"=> 2,
                "start_time"=> "2023-05-08 16:26:03",
                "status"=> "0"
            ],
            [
                "end_time"=> "2023-05-08 16:29:18",
                "id"=> 7,
                "module_name"=> "Translator",
                "session_id"=> null,
                "start_time"=> "2023-05-08 16:28:03",
                "status"=> "NT3"
            ],
            [
                "end_time"=> "2023-05-08 16:29:42",
                "id"=> 8,
                "module_name"=> "Linguist",
                "session_id"=> 2,
                "start_time"=> "2023-05-08 16:29:18",
                "status"=> "NL2"
            ],
            [
                "end_time"=> "2023-05-08 16:29:58",
                "id"=> 9,
                "module_name"=> "Zigmund",
                "session_id"=> 2,
                "start_time"=> "2023-05-08 16:29:43",
                "status"=> "NZ1"
            ],
            [
                "end_time"=> "2023-05-08 16:30:47",
                "id"=> 10,
                "module_name"=> "Gateway INS",
                "session_id"=> 2,
                "start_time"=> "2023-05-08 16:30:00",
                "status"=> "E205"
            ],
        ];

        $data3 = [
          [
            "end_time" => null,
            "id" => 1,
            "module_name" => "GUI",
            "session_id" => 1,
            "start_time" => "2023-05-22 14:35:00",
            "status" => "0"
          ],
          [
            "end_time" => "2023-05-22 14:30:30",
            "id" => 2,
            "module_name" => "Translator",
            "session_id" => 1,
            "start_time" => "2023-05-22 14:30:10",
            "status" => "NT0"
          ],
          [
            "end_time" => "2023-05-22 14:30:00",
            "id" => 3,
            "module_name" => "GUI",
            "session_id" => 2,
            "start_time" => "2023-05-22 14:35:00",
            "status" => "0"
          ],
          [
            "end_time" => "2023-05-22 14:30:30",
            "id" => 4,
            "module_name" => "Translator",
            "session_id" => 2,
            "start_time" => "2023-05-22 14:30:10",
            "status" => "NT0"
          ],
          [
            "end_time" => "2023-05-22 14:31:00",
            "id" => 5,
            "module_name" => "Linguist",
            "session_id" => 10,
            "start_time" => "2023-05-22 14:30:40",
            "status" => "NL0"
          ],
        ];
        $randomNumber = rand(1, 15);

        if ($randomNumber > 13) {
            return response()->json($data);
        } else if ($randomNumber > 12){
            return response()->json($data2);
        } else {
            return response()->json($data3);
        }
    }

    public function addProductsToOrder(Request $request)
    {
        $userId = $request->input('user_id');
        $deliveryAddress = $request->input('delivery_address');
        $totalPrice = $request->input('total_price');
        $user = User::findOrFail($userId);
        $cart = $user->cart;
        
        // Создание нового заказа
        $order = new Order([
            'user_id' => $user->id,
            'date' => Carbon::now()->addWeek()->toDateString(),
            'delivery_address' => $deliveryAddress,
            'total_price' => $totalPrice
            // Дополнительные поля заказа (если есть)
        ]);
        
        // Сохранение заказа
        $order->save();
        
        // Связывание продуктов из корзины с заказом
        foreach ($cart->cartItems as $cartItem) {
            $orderItem = new OrderItem([
                'product_id' => $cartItem->product_id,
                'color_id' => $cartItem->color_id,
                'size_id' => $cartItem->size_id,
                'quantity' => $cartItem->quantity,
            ]);
            
            // Связывание заказа с заказанными продуктами
            $order->orderItems()->save($orderItem);
        }
        
        // Удаление продуктов из корзины
        $cart->cartItems()->delete();

        // Отправка информации о заказе на почту
        Mail::to($user->email)->send(new OrderConfirmation($order));

        
        return response()->json(['message' => 'Order created successfully.'], Response::HTTP_CREATED);
    }
}
