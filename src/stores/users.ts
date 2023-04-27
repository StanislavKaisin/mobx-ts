import api from "../api/api";
import { IUser } from "../api/models/models";
import { Store } from "./store";

export const usersStore = new Store<IUser>(api, "users");
