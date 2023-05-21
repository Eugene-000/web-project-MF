import { IColor, ISize } from "./items";

export interface IProductAddToCart {
  userId: string | null;
  productId: number;
  sizeId: number;
  colorId: number;
  quantity: number;
}

export interface IItemForCart {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category_id: number;
}

export interface ICartItem {
  id: number;
  cart_id: number;
  quantity: number;
  product: IItemForCart;
  color: IColor;
  size: ISize;
}

export interface IUpdateQuantity {
  quantity: number;
}

export interface IOrderItem {
  full_name: string;
  email: string;
  phone: string;
  delivery_address: string;
  total_price?: number;
}