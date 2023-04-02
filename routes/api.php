<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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
Route::get('/categories', [CategoryController::class, 'index']);
// Route::get('/newItems', [ProductController::class, 'newProducts']);
// Route::get('/popularItems', [ProductController::class, 'popularProducts']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

