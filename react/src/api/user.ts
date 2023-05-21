import { IUser, IUserUpdate} from "../models/user";
import { HttpClient } from "./index";

export class UserApi {
  static async getUser(user_id: string): Promise<IUser> {
    const response = await HttpClient.get(`/user/${user_id}`);
    const user = response.data;
    return user;
  }

  static async setUserUpdate(user_id: string, updateData: IUserUpdate): Promise<IUser> {
    const response = await HttpClient.put(`/user/${user_id}`, updateData);
    console.log(response)
    const user = response.data;
    return user;
  }
}