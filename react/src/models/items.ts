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

  interface ICategory {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  
  interface IColor {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  
  interface ISize {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  