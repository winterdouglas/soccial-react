import styled from "styled-components";

import { Card } from "@/components/Card";
import { useGroups } from "@/services/api";
import { toArray } from "@/utils/entityAdapter";
import { useAuth } from "@/features/auth";
import { PostsByGroup } from "./PostsByGroup";
import { PostMessageForm } from "./PostMessageForm";

const PostsContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacingExtraSmall};
`;

const MessageForm = styled(PostMessageForm)`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacingSmall};
  padding: 0 0 ${({ theme }) => theme.spacingExtraSmall};
`;

export const UserGroups = () => {
  const { user } = useAuth();
  const { data: groups } = useGroups(user?.id || 0);

  return (
    <>
      {toArray(groups).map((group) => {
        return (
          <Card
            key={group.id}
            title={group.name}
            ContainerComponent={PostsContainer}>
            <MessageForm groupId={group.id} />
            <PostsByGroup groupId={group.id} />
          </Card>
        );
      })}
    </>
  );
};
