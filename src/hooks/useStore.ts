import { createContext, useContext } from "react";
import { cartStore } from "../stores/carts";

export const rootStore = { cartStore };
export const StoreContext = createContext(rootStore);

export function useStore() {
  return useContext(StoreContext);
}
