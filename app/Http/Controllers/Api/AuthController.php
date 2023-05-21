<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Email or password incorrect'
            ]);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function signup(SignupRequest $request) {
        $data = $request->validated();
        /** @var User $user */
        $user = User::create([
            'full_name' => $data['full_name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'delivery_address' => $data['delivery_address'],
            'phone' => $data['phone'],
        ]);

        $cart = new Cart();
        $user->cart()->save($cart);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }

    // public function logout(Request $request) {
    //     /** @var User $user */
    //     $user = $request->user();
    //     $user->currentAccessToken()->delete();
    //     return response('', 204);
    // }
}
