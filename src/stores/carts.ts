import { AxiosError, isAxiosError } from "axios";
import { action, makeObservable, observable } from "mobx";
import api, { Api } from "../api/api";
import { ICart } from "../api/models/models";

class CartStore {
  error: null | AxiosError = null;
  isLoading = false;
  carts: ICart[] = [];
  constructor(private api: Api) {
    makeObservable(this, {
      carts: observable,
      getAll: action,
    });
  }
  *getAll() {
    this.isLoading = true;
    try {
      this.carts = yield this.api.performRequest("/carts");
      this.isLoading = false;
    } catch (error) {
      if (isAxiosError(error)) {
        this.error = error;
      }
    }
  }
}

export const cartStore = new CartStore(api);
