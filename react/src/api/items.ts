import { IItem } from "../models/items";
import { HttpClient } from "./index";

export class ItemsApi {
  static async getItems(): Promise<Array<IItem>> {
    const response = await HttpClient.get("/items");
    const items = response.data.data;
    return items;
  }

  static async getItem(id: string): Promise<IItem> {
    const response = await HttpClient.get(`/item/${id}`);
    const item = response.data.data;
    return item;
  }

  static async getNewItem(): Promise<Array<IItem>> {
    const response = await HttpClient.get("/newItems");
    const newItems = response.data.data;
    return newItems;
  }
}
