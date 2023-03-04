<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function cartItems()
    {
        return $this->hasMany(CartItem::class, 'size_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'size_id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_sizes', 'size_id', 'product_id');
    }
}
