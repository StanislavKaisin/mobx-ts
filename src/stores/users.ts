import api, { Api } from "../api/api";
import { IUser } from "../api/models/models";
import { Store, routeNameType } from "./store";
import { action, computed, makeObservable } from "mobx";

class UsersStore extends Store<IUser> {
  constructor(api: Api, routeType: routeNameType, numberOfRecords = 100) {
    super(api, routeType, numberOfRecords);
    makeObservable(this, {
      getUserById: action,
      getAverageUserAge: computed,
    });
  }
  getUserById(id: number | undefined) {
    const user = id ? this.items.find((item) => item.id === id) : undefined;
    return user
      ? { img: user?.image, text: user!.firstName + " " + user!.lastName }
      : { img: "", text: "" };
  }
  get getAverageUserAge() {
    if (this.items.length) {
      return (
        this.items.reduce((acc, item) => acc + item.age, 0) /
        this.numberOfRecords
      ).toFixed(2);
    }
    return 0;
  }
  getMostCommonDepartment() {
    const departments: Record<string, number> = {};
    this.items.forEach((item) => {
      if (Object.keys(departments).includes(item.company.department)) {
        departments[item.company.department] =
          departments[item.company.department] + 1;
      } else departments[item.company.department] = 1;
    });
    const maxOrders = Math.max(...Object.values(departments));
    const result: [string, number][] = [];
    for (const department in departments) {
      if (departments[department] === maxOrders) {
        result.push([department, maxOrders]);
      }
    }
    return result;
  }
}

export const usersStore = new UsersStore(api, "users", 100);
