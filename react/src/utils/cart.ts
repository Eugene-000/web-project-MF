import { ICartItem } from "../models/cart";

export function getTotalCartPrice(cartItems: ICartItem[]) {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemPrice = item.product.price;
      const itemQuantity = item.quantity;
      totalPrice += itemPrice * itemQuantity;
    });
    return totalPrice;
  }