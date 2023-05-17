import styled from "styled-components";

import { Card } from "@/components/Card";
import { useAuth } from "@/features/auth";
import { addYears, formatDayOfWeek, parseShortDate } from "@/utils/dateUtils";

const Year = styled.b`
  font-weight: bold;
`;

export const UserBirthdayCard = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const userBirthday = parseShortDate(user.birthday);

  const birthdayDays = [
    addYears(userBirthday, -1),
    userBirthday,
    addYears(userBirthday, 1),
  ].map((date) => ({
    year: date.getFullYear(),
    dayName: formatDayOfWeek(date),
  }));

  return (
    <Card title={`Your birthday is on ${user.birthday}`}>
      <p>When it happens:</p>
      {birthdayDays.map(({ year, dayName }) => (
        <p key={`${year}-${dayName}`}>
          <Year>{year}</Year>: {dayName}
        </p>
      ))}
    </Card>
  );
};
