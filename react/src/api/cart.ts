import { ICartItem, IOrderItem, IProductAddToCart, IUpdateQuantity } from "../models/cart";
import { HttpClient } from "./index";

export class CartApi {
  static async setProductToCart(payload: IProductAddToCart) {
    const response = await HttpClient.post(`/cart/add`, payload);
    const message = response.data;
    return message;
  }

  static async getCartItems(user_id:string): Promise<Array<ICartItem>> {
    const response = await HttpClient.get(`/cart/${user_id}`);
    const cartItems = response.data;
    return cartItems;
  }

  static async setUpdateQuantityItem(cartItemId: number, payload: IUpdateQuantity) {
    const response = await HttpClient.put(`/cart/${cartItemId}/update-quantity`, payload);
    const message = response.data;
    console.log(message)
    return message;
  }

  static async setDeleteItem(cartItemId: number) {
    const response = await HttpClient.put(`/cart/${cartItemId}/delete-item`);
    const message = response.data;
    console.log(message)
    return message;
  }

  static async setProductsToCart(payload: IOrderItem) {
    const response = await HttpClient.post(`/order/add`, payload);
    const message = response.data;
    console.log(message)
    return message;
  }
}