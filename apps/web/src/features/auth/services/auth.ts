import { getObject, remove, setObject } from "@/lib/storage";
import { Api, User } from "@/services/api";

const StorageKey = "soccial.user";

export const authService = {
  getUser: () => {
    return getObject<User>(StorageKey);
  },
  signIn: async (userName: string) => {
    const user = await Api.getUserByName(userName);
    if (!user) return;

    setObject(StorageKey, user);
    return user;
  },
  signOut: () => {
    remove(StorageKey);
  },
};
