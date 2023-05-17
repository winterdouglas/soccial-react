import { useQuery } from "react-query";

import { Api, Post } from "@/services/api";
import { EntitiesAndIds, selectEntities } from "@/utils/entityAdapter";
import { sortISODateStringDesc } from "@/utils/dateUtils";

export const usePosts = (groupId?: number) => {
  const byGroupId = ({ group }: Post) => {
    return groupId !== undefined ? group === groupId : true;
  };

  return useQuery<Post[], Error, EntitiesAndIds<Post>>(
    "posts",
    Api.getAllPosts,
    {
      select: (data) =>
        selectEntities(data, {
          filter: byGroupId,
          sortBy: (a, b) => sortISODateStringDesc(a.createdAt, b.createdAt),
        }),
    }
  );
};
