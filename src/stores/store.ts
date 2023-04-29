import { AxiosError, isAxiosError } from "axios";
import { action, makeObservable, observable } from "mobx";
import { Api } from "../api/api";

export type routeNameType = "carts" | "products" | "users";

type IGetStoreResponse<T> = {
  [routeName in routeNameType]: T[];
} & {
  total: number;
  skip: number;
  limit: number;
};

export class Store<T> {
  error: null | AxiosError = null;
  isLoading = false;
  items: T[] = [];
  constructor(
    private api: Api,
    public routeType: routeNameType,
    public numberOfRecords = 20
  ) {
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
      const response = await this.api.performRequest<IGetStoreResponse<T>, any>(
        `${this.routeType}?limit=${this.numberOfRecords}`
      );
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
