import { ICategory} from "../models/selectList";
import { HttpClient } from "./index";

export class CategoriesApi {
  static async getCategories(): Promise<Array<ICategory>> {
    const response = await HttpClient.get("/categories");
    const items = response.data;
    return items;
  }
}