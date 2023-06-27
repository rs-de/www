import { useFormatter } from "next-intl";

export default function DateOfCreation({ dateString }: { dateString: string }) {
  const format = useFormatter();
  const dateTime = new Date(dateString);

  // Renders "Nov 20, 2020"
  return format.dateTime(dateTime, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
