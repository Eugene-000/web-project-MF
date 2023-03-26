<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getAllProducts()
    {
        $products = Product::with(['category', 'colors', 'sizes'])->get();

        return response()->json(['data' => $products]);
    }

    public function newProducts()
    {
        $newProducts = Product::with(['category', 'colors', 'sizes'])
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        return response()->json(['data' => $newProducts]);
    }

    public function popularProducts()
    {
        $products = Product::with(['category', 'colors', 'sizes'])
            ->withCount(['cartItems', 'orderItems'])
            ->orderByDesc('cart_items_count')
            ->orderByDesc('order_items_count')
            ->limit(3)
            ->get();

        return response()->json(['data' => $products]);
    }


}
