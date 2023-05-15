import type { Friend } from "../typings/friend.js";

export const bdayToDate = (date: Friend["bday"]) =>
  new Date(`${date[0]}-${date[1]}-${date[2]}`);

export const formatDate = (date: Date) =>
  date.toLocaleDateString("de", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

export const dateToInputValue = (date: Date) => {
  date.setUTCHours(24);
  return date.toISOString().split("T")[0];
};
