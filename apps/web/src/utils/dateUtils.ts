import {
  parse,
  parseISO,
  format,
  formatDistanceToNow,
  compareAsc,
  compareDesc,
  addYears as addYearsFns,
  isToday as isTodayFns,
} from "date-fns";

const DAY_OF_WEEK_FORMAT = "EEEE";
const SHORT_DATE_FORMAT = "dd-MM";

export const parseShortDate = (shortDate: string) =>
  parse(shortDate, SHORT_DATE_FORMAT, new Date());

export const parseISODate = (date: string) => parseISO(date);

export const formatDayOfWeek = (date: Date | number) =>
  format(date, DAY_OF_WEEK_FORMAT);

export const formatDateToNow = (date: Date | number) =>
  formatDistanceToNow(date, { addSuffix: true });

export const sortDateAsc = (
  dateLeft: Date | number,
  dateRight: Date | number
) => compareAsc(dateLeft, dateRight);

export const sortDateDesc = (
  dateLeft: Date | number,
  dateRight: Date | number
) => compareDesc(dateLeft, dateRight);

export const sortISODateStringAsc = (dateLeft: string, dateRight: string) =>
  compareAsc(parseISO(dateLeft), parseISO(dateRight));

export const sortISODateStringDesc = (dateLeft: string, dateRight: string) =>
  compareDesc(parseISO(dateLeft), parseISO(dateRight));

export const addYears = (date: Date | number, amount: number) =>
  addYearsFns(date, amount);

export const isToday = (date: Date | number) => isTodayFns(date);
