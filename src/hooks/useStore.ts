import { createContext, useContext } from "react";
import { cartStore } from "../stores/carts";
import { productsStore } from "../stores/products";
import { usersStore } from "../stores/users";

export const rootStore = { cartStore, productsStore, usersStore };
export const StoreContext = createContext(rootStore);

export function useStore() {
  return useContext(StoreContext);
}
