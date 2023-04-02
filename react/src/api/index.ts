import axios from "axios";
import { SERVER_URL_API } from "../constants/routes";
import { STORE } from "../store";
import { setVisible } from "../store/modal/actions";

export const HttpClient = axios.create({
  baseURL: SERVER_URL_API,
});

HttpClient.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    STORE.dispatch(setVisible(error.message))
    return Promise.reject(error);
  }
);

HttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    STORE.dispatch(setVisible(error.message))
    return Promise.reject(error);
  }
);
