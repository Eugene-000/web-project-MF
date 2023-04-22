import { IItem, INewPopularItem } from "../models/items";
import { HttpClient } from "./index";

export class ItemsApi {
  static async getItems(category_id?:string): Promise<Array<IItem>> {
    const response = await HttpClient.get(`${category_id ? (`/items/${category_id}`) : ('/items')}`);
    const items = response.data.data;
    return items;
  }

  static async getItem(id: string): Promise<IItem> {
    const response = await HttpClient.get(`/item/${id}`);
    const item = response.data.data[0];
    return item;
  }

  static async getNewPopularItems(): Promise<INewPopularItem> {
    const response = await HttpClient.get("/new-popular-items");
    const newPopularItems = response.data;
    return newPopularItems;
  }
}
