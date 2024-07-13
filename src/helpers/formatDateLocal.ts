import { format, parseISO } from "date-fns";

export const formatDateLocal = (date: string) => {
	const parseDate = parseISO(date);

	return format(parseDate, "yyyy-MM-dd'T'HH:mm:ss");
};
