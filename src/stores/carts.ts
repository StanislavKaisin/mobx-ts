// import { AxiosError, isAxiosError } from "axios";
// import { action, makeObservable, observable } from "mobx";
import api from "../api/api";
import { ICart } from "../api/models/models";
import { Store } from "./store";

// interface IGetCartsResponse {
//   carts: ICart[];
//   total: number;
//   skip: number;
//   limit: number;
// }

// class CartStore {
//   error: null | AxiosError = null;
//   isLoading = false;
//   carts: ICart[] = [];
//   constructor(private api: Api) {
//     makeObservable(this, {
//       carts: observable,
//       getAll: action,
//     });
//     this.api = api;
//     this.getAll();
//   }
//   async getAll() {
//     this.isLoading = true;
//     try {
//       const response = (
//         await this.api.performRequest<IGetCartsResponse, any>("carts?limit=20")
//       ).carts;
//       this.carts = response;
//       this.isLoading = false;
//     } catch (error) {
//       if (isAxiosError(error)) {
//         this.error = error;
//         this.isLoading = false;
//       }
//     }
//   }
// }

// export const cartStore = new CartStore(api);

export const cartStore = new Store<ICart>(api, "carts");
