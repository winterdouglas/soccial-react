import { useMutation, useQueryClient } from "react-query";

import { useAuth } from "@/features/auth";
import { Api, Post } from "@/services/api";
import { usePosts } from "./usePosts";

export const usePostMutation = () => {
  const queryClient = useQueryClient();
  const { data } = usePosts();
  const { user } = useAuth();

  const nextPostId = () => {
    const ids = data?.ids || [0];
    return Math.max(...ids) + 1;
  };

  return useMutation<Post, Error, Omit<Post, "id" | "createdAt" | "creatorId">>(
    {
      mutationFn: (post) => {
        const newPost: Post = {
          ...post,
          id: nextPostId(),
          createdAt: new Date().toISOString(),
          creatorId: user?.id || 0,
        };
        return Api.post(newPost);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );
};
