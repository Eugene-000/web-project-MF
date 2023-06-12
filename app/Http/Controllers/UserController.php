<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function getUserForID($user_id)
    {
        $user = User::findOrFail($user_id);
        return response()->json($user, Response::HTTP_OK, [], JSON_PRETTY_PRINT);
    }

    public function updateUserForId(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->full_name = $request->input('full_name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->delivery_address = $request->input('delivery_address');

        $user->save();

        return response()->json(['message' => 'Данные успешно обновлены']);
    }
}
