import api from "../api/api";
import { IProduct } from "../api/models/models";
import { Store } from "./store";

export const productsStore = new Store<IProduct>(api, "products", 100);
