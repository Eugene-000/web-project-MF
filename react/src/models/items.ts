export interface INewPopularItem {
  newItem: Array<IItem>;
  popularItem: Array<IItem>;
}

export interface IItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: ICategory;
  category_id: number;
  created_at: string;
  updated_at: string;
  colors: IColor[];
  sizes: ISize[];
  cart_items_count?: number;
  order_items_count?: number;
}

export interface ICategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface IColor {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ISize {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
  