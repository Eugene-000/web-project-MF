<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CartItem;
use App\Models\User;

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
                "session_id"=> 1,
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
                "session_id"=> 2,
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
            [
                "end_time"=> "2023-05-08 17:21:47",
                "id"=> 11,
                "module_name"=> "GUI",
                "session_id"=> 3,
                "start_time"=> "2023-05-08 17:17:03",
                "status"=> "0"
            ],
            [
                "end_time"=> "2023-05-08 17:19:18",
                "id"=> 12,
                "module_name"=> "Translator",
                "session_id"=> 3,
                "start_time"=> "2023-05-08 17:18:03",
                "status"=> "NT2"
            ],
            [
                "end_time"=> "2023-05-08 17:19:42",
                "id"=> 13,
                "module_name"=> "Linguist",
                "session_id"=> 3,
                "start_time"=> "2023-05-08 17:19:18",
                "status"=> "NL0"
            ],
            [
                "end_time"=> "2023-05-08 17:19:58",
                "id"=> 14,
                "module_name"=> "Zigmund",
                "session_id"=> 3,
                "start_time"=> "2023-05-08 17:19:43",
                "status"=> "NZ0"
            ],
            [
                "end_time"=> "2023-05-08 17:20:47",
                "id"=> 15,
                "module_name"=> "Gateway INS",
                "session_id"=> 3,
                "start_time"=> "2023-05-08 17:20:00",
                "status"=> "E32"
            ],
        ];

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
                "session_id"=> 1,
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
                "session_id"=> 2,
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
        $randomNumber = rand(1, 10);

        if ($randomNumber > 5) {
            return response()->json($data);
        } else {
            return response()->json($data2);
        }
    }

}
