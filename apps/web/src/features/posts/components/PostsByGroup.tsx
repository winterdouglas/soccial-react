import { usePosts } from "@/services/api";
import { toArray } from "@/utils/entityAdapter";
import { UserPost } from "./UserPost";

export type PostsByGroupProps = {
  groupId: number;
};

export const PostsByGroup = ({ groupId }: PostsByGroupProps) => {
  const { data: posts } = usePosts(groupId);

  return (
    <>
      {toArray(posts).map((post) => {
        return (
          <UserPost
            key={post.id}
            createdAt={post.createdAt}
            creatorId={post.creatorId}
            title={post.title}
          />
        );
      })}
    </>
  );
};
