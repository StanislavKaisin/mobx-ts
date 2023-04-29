import api, { Api } from "../api/api";
import { IUser } from "../api/models/models";
import { Store, routeNameType } from "./store";
import { action, computed, makeObservable, toJS } from "mobx";

class UsersStore extends Store<IUser> {
  constructor(api: Api, routeType: routeNameType, numberOfRecords = 100) {
    super(api, routeType, numberOfRecords);
    makeObservable(this, {
      getUserById: action,
    });
  }
  getUserById(id: number) {
    const user = this.items.find((item) => item.id === id);
    return user
      ? { img: user?.image, text: user!.firstName + " " + user!.lastName }
      : { img: "", text: "" };
  }
}

export const usersStore = new UsersStore(api, "users", 100);
