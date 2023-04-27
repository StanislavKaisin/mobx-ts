import { AxiosError, isAxiosError } from "axios";
import { action, makeObservable, observable } from "mobx";
import { Api } from "../api/api";

export type routeNameType = "carts" | "products" | "users";

interface IGetStoreResponse<T, routeNameType> {
  routeNameType: T[];
  total: number;
  skip: number;
  limit: number;
}

export class Store<T> {
  error: null | AxiosError = null;
  isLoading = false;
  items: T[] = [];
  constructor(private api: Api, public routeType: string) {
    makeObservable(this, {
      items: observable,
      getAll: action,
    });
    this.api = api;
    this.getAll();
  }
  async getAll() {
    this.isLoading = true;
    try {
      const response = await this.api.performRequest<
        // IGetStoreResponse<T, RouteType>,
        // IGetStoreResponse<T, typeof this.routeType>,
        IGetStoreResponse<T, typeof this.routeType>,
        any
      >(`${this.routeType}?limit=20`);
      // this.items = response[this.routeType];

      //@ts-ignore
      this.items = response[this.routeType];
      this.isLoading = false;
    } catch (error) {
      if (isAxiosError(error)) {
        this.error = error;
        this.isLoading = false;
      }
    }
  }
}

// export const cartStore = new Store(api);
