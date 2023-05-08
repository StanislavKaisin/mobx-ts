import { computed, makeObservable, toJS } from "mobx";
import api, { Api } from "../api/api";
import { ICart, IProduct } from "../api/models/models";
import { Store, routeNameType } from "./store";

interface ICartProduct extends IProduct {
  quantity: number;
}

class CartsStore extends Store<ICart> {
  constructor(api: Api, routeType: routeNameType, numberOfRecords = 20) {
    super(api, routeType, numberOfRecords);
    makeObservable(this, {
      getAverageCartCost: computed,
      getTotalProductsQuantity: computed,
    });
  }
  get getTotalProductsQuantity() {
    return this.items.reduce((acc, item) => acc + item.totalQuantity, 0);
  }
  get getAverageCartCost() {
    return (
      this.items.reduce((acc, item) => acc + item.discountedTotal, 0) /
      this.numberOfRecords
    ).toFixed(2);
  }

  getSortedByValue() {
    if (this.items.length) {
      const sortedItems = toJS(this.items).sort((a, b) => a.total - b.total);
      return sortedItems;
    }
    return this.items;
  }

  getHighestLowestCarts() {
    if (this.items.length) {
      const sortedItems = this.getSortedByValue();
      const highestCart = sortedItems[sortedItems.length - 1].total;
      const lowestCart = sortedItems[0].total;
      return [highestCart.toFixed(2), lowestCart.toFixed(2)];
    }
    return [0, 0];
  }

  getMostValuableCustomer() {
    if (this.items.length) {
      const sortedItems = this.getSortedByValue();
      const mostValuableCustomerId = sortedItems[sortedItems.length - 1].userId;
      return mostValuableCustomerId;
    }
    return undefined;
  }

  getMostWantedGood() {
    if (this.items.length) {
      const productsFromCarts = toJS(this.items).reduce(
        (acc: IProduct[], item) => {
          acc = [...acc, ...item.products];
          return acc;
        },
        []
      );
      const productsDictionary: Record<string, number> = {};
      productsFromCarts.forEach((product) => {
        if (productsDictionary[product.title]) {
          productsDictionary[product.title] =
            productsDictionary[product.title] +
            (product as ICartProduct).quantity;
        } else {
          productsDictionary[product.title] = (
            product as ICartProduct
          ).quantity;
        }
      });
      const maxOrders = Math.max(...Object.values(productsDictionary));
      const result: [string, number][] = [];
      for (const product in productsDictionary) {
        if (productsDictionary[product] === maxOrders) {
          result.push([product, maxOrders]);
        }
      }
      return result;
    }
    return undefined;
  }
}
export const cartsStore = new CartsStore(api, "carts");
