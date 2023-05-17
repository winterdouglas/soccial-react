import { useQuery } from "react-query";

import { Api, User } from "@/services/api";
import { EntitiesAndIds, selectEntities } from "@/utils/entityAdapter";

export const useUsers = () => {
  return useQuery<User[], Error, EntitiesAndIds<User>>(
    "users",
    Api.getAllUsers,
    {
      select: selectEntities,
    }
  );
};
