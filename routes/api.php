<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/items', [ProductController::class, 'getAllProducts']);
Route::get('/new-popular-items', [ProductController::class, 'getNewPopularItems']);
Route::get('/items/{category}', [ProductController::class, 'getProductsForIDCategory']);
Route::get('/item/{product}', [ProductController::class, 'getProductForIDProduct']);

Route::get('/categories', [CategoryController::class, 'index']);

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/cart/{user_id}', [CartController::class, 'getCartProducts']);
Route::post('/cart/add', [CartController::class, 'addProductToCart']);
Route::put('/cart/{cartItemId}/update-quantity', [CartController::class, 'updateCartItemQuantity']);
Route::put('/cart/{cartItemId}/delete-item', [CartController::class, 'deleteCartItem']);

Route::post('/order/add', [CartController::class, 'addProductsToOrder']);

//! Для диплома
Route::get('/system_data/{start_time}/{end_time}', [CartController::class, 'getSystemData']);

// Route::middleware(['cors'])->get('/system_data/{start_date}/{end_date}', [CartController::class, 'getSystemData']);


Route::get('/user/{user_id}', [UserController::class, 'getUserForID']);
Route::put('/user/{user_id}', [UserController::class, 'updateUserForId']);
// Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);
// Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);

// Route::get('/newItems', [ProductController::class, 'newProducts']);
// Route::get('/popularItems', [ProductController::class, 'popularProducts']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

