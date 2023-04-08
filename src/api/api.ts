import axios, { AxiosResponse, Method } from "axios";

const BASE_URL = "https://dummyjson.com/";

export class Api {
  async performRequest<T, R>(url: string, method: Method = "GET", body?: R) {
    const response: AxiosResponse<T, R> = await axios({
      method: method,
      url: BASE_URL + url,
    });
    return response.data;
  }
}
const api = new Api();
export default api;
