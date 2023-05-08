import { computed, makeObservable, toJS } from "mobx";
import api, { Api } from "../api/api";
import { IProduct } from "../api/models/models";
import { Store, routeNameType } from "./store";

class ProductsStore extends Store<IProduct> {
  constructor(api: Api, routeType: routeNameType, numberOfRecords = 100) {
    super(api, routeType, numberOfRecords);
    makeObservable(this, {
      getAverageProductCost: computed,
      getProductsOnStorage: computed,
      getTotalSumOnStorage: computed,
    });
  }

  get getAverageProductCost() {
    if (this.items.length) {
      return (
        this.items.reduce((acc, item) => acc + item.price, 0) /
        this.numberOfRecords
      ).toFixed(2);
    }
    return 0;
  }

  getHighestLowestPricesProduct() {
    if (this.items.length) {
      const sortedItems = toJS(this.items).sort((a, b) => a.price - b.price);
      const highestPrice = sortedItems[sortedItems.length - 1].price;
      const lowestPrice = sortedItems[0].price;
      return [highestPrice.toFixed(2), lowestPrice.toFixed(2)];
    }
    return [0, 0];
  }

  get getProductsOnStorage() {
    if (this.items.length) {
      return this.items.reduce((acc, item) => acc + item.stock, 0);
    }
    return 0;
  }
  get getTotalSumOnStorage() {
    if (this.items.length) {
      return this.items
        .reduce((acc, item) => acc + item.stock * item.price, 0)
        .toFixed(2);
    }
    return 0;
  }
}

export const productsStore = new ProductsStore(api, "products", 100);
