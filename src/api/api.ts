import axios from "axios";

const BASE_URL = "https://dummyjson.com/";

export class Api {
  async performRequest<T>(url: string, method = "GET", body?: T) {
    const response = await axios({
      method: method,
      url: BASE_URL + url,
    });
    return response;
  }
}
const api = new Api();
export default api;
