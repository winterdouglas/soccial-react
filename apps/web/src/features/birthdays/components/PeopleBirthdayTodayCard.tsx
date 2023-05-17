import { useCallback, useMemo } from "react";

import { useUsers } from "@/services/api/hooks";
import { toArray } from "@/utils/entityAdapter";
import { isToday, parseShortDate } from "@/utils/dateUtils";
import { User } from "@/services/api";
import { Card } from "@/components/Card";

export const PeopleBirthdayTodayCard = () => {
  const { data: users } = useUsers();

  const havingBirthdayToday = useCallback((user: User) => {
    return isToday(parseShortDate(user.birthday));
  }, []);

  const peopleHavingBirthday = useMemo(
    () => toArray(users).filter(havingBirthdayToday),
    [users, havingBirthdayToday]
  );

  return (
    <Card
      title={
        peopleHavingBirthday.length === 0
          ? "No birthdays today :("
          : "\u{1F389} Wish happy birthdays to"
      }>
      {peopleHavingBirthday.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </Card>
  );
};
