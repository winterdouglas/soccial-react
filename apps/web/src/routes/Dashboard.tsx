import styled from "styled-components";

import { onDesktop, subtitleText } from "@/assets/styles";
import {
  PeopleBirthdayTodayCard,
  UserBirthdayCard,
} from "@/features/birthdays";
import { UserGroups } from "@/features/posts";

const Container = styled.div`
  display: grid;
  padding-block: ${({ theme }) => theme.spacingMedium};
  margin-inline: auto;
  width: min(100% - ${({ theme }) => theme.spacingLarge} * 2, 70rem);
  gap: ${({ theme }) => theme.spacingMedium};
  align-items: start;

  ${onDesktop`
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "birthdays posts"
      "birthdays posts";
  `}
`;

const Section = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacingMedium};
`;

const PeopleHavingBirthdaySection = styled(Section)`
  ${onDesktop`
    grid-area: birthdays;
    grid-row: 1;
  `}
`;

const UserBirthdaySection = styled(Section)`
  ${onDesktop`
    grid-area: birthdays;
    grid-row: 2;
  `}
`;

const PostsSection = styled(Section)`
  ${onDesktop`
    grid-area: posts;
  `}
`;

const Title = styled.h2`
  ${subtitleText}
`;

export const Dashboard = () => {
  return (
    <Container>
      <PeopleHavingBirthdaySection>
        <Title>People having birthdays</Title>
        <PeopleBirthdayTodayCard />
      </PeopleHavingBirthdaySection>

      <UserBirthdaySection>
        <Title>When's your birthday</Title>
        <UserBirthdayCard />
      </UserBirthdaySection>

      <PostsSection>
        <Title>Posts in your groups</Title>
        <UserGroups />
      </PostsSection>
    </Container>
  );
};
