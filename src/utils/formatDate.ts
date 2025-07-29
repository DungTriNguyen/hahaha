import { format, parseISO } from "date-fns";

export function formatDateToLongEN(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, "d MMMM yyyy");
  } catch (error) {
    console.error("Invalid date:", dateString);
    return dateString;
  }
}
