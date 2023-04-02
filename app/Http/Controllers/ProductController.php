<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductsForIDCategory($category)
    {
        $products = Product::with(['category', 'colors', 'sizes'])->where('category_id', $category)->get();

        return response()->json(['data' => $products]);
    }

    public function getAllProducts()
    {
        $products = Product::with(['category', 'colors', 'sizes'])->get();

        return response()->json(['data' => $products]);
    }

    // public function newProducts()
    // {
    //     $newProducts = Product::with(['category', 'colors', 'sizes'])
    //         ->orderBy('created_at', 'desc')
    //         ->take(3)
    //         ->get();

    //     return response()->json(['data' => $newProducts]);
    // }

    // public function popularProducts()
    // {
    //     $products = Product::with(['category', 'colors', 'sizes'])
    //         ->withCount(['cartItems', 'orderItems'])
    //         ->orderByDesc('cart_items_count')
    //         ->orderByDesc('order_items_count')
    //         ->limit(3)
    //         ->get();

    //     return response()->json(['data' => $products]);
    // }

    public function getNewPopularItems()
    {
        $newItems = Product::orderBy('created_at', 'desc')
                            ->with(['category', 'colors', 'sizes'])
                            ->take(3)
                            ->get()
                            ->map(function ($item) {
                                return $this->mapItemData($item);
                            });

        $popularItems = Product::withCount(['cartItems', 'orderItems'])
                                ->orderBy('cart_items_count', 'desc')
                                ->orderBy('order_items_count', 'desc')
                                ->take(3)
                                ->get()
                                ->map(function ($item) {
                                    return $this->mapItemData($item);
                                });

        return response()->json([
            'newItem' => $newItems,
            'popularItem' => $popularItems
        ]);
    }

    private function mapItemData($item)
    {
        return [
            'id' => $item->id,
            'name' => $item->name,
            'description' => $item->description,
            'image' => $item->image,
            'price' => $item->price,
            'category' => $item->category,
            'category_id' => $item->category_id,
            'created_at' => $item->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $item->updated_at->format('Y-m-d H:i:s'),
            'colors' => $item->colors,
            'sizes' => $item->sizes,
            'cart_items_count' => $item->cart_items_count,
            'order_items_count' => $item->order_items_count
        ];
    }
}
