import { useQuery } from "react-query";

import { Api, Group } from "@/services/api";
import { EntitiesAndIds, selectEntities } from "@/utils/entityAdapter";

export const useGroups = (userId?: number) => {
  const byUser = ({ admins, members }: Group) => {
    return userId !== undefined
      ? admins.includes(userId) || members.includes(userId)
      : true;
  };

  return useQuery<Group[], Error, EntitiesAndIds<Group>>(
    "groups",
    Api.getAllGroups,
    {
      select: (data) =>
        selectEntities(data, {
          filter: byUser,
          sortBy: (a, b) => a.name.localeCompare(b.name),
        }),
    }
  );
};
