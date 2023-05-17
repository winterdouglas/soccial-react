import { HTMLAttributes } from "react";

import { useUsers } from "@/services/api";
import styled from "styled-components";
import { smallText } from "@/assets/styles";
import { formatDateToNow, parseISODate } from "@/utils/dateUtils";

const Container = styled.article`
  padding: ${({ theme }) => theme.spacingSmall};
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  background-color: ${({ theme }) => theme.backgroundAlt};
  border: ${({ theme }) => theme.borderWidth} solid transparent;
  outline-color: transparent;
  ${smallText}

  &:hover, &:focus {
    outline: ${({ theme }) => theme.borderWidth};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const UserName = styled.b`
  text-transform: capitalize;
  font-weight: bold;
`;

const Message = styled.b`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const Time = styled.time`
  color: ${({ theme }) => theme.textDim};
`;

export type UserPostProps = HTMLAttributes<HTMLElement> & {
  createdAt: string;
  creatorId: number;
  title: string;
};

export const UserPost = ({
  createdAt,
  creatorId,
  title,
  ...props
}: UserPostProps) => {
  const { data: users } = useUsers();
  const user = users?.entities[creatorId];

  const timeAgo = formatDateToNow(parseISODate(createdAt));

  return (
    <Container tabIndex={0} {...props}>
      <h4>
        <UserName>{user?.name}</UserName> posted a new message{" "}
        <Message>{title}</Message>
      </h4>
      <Time dateTime={createdAt}>{timeAgo}</Time>
    </Container>
  );
};
