import { DateSelectArg } from "@fullcalendar/core/index.js";
import { useState } from "react";
import initalDates from "../data/events.json";
import { Dates } from "../interfaces/dates.interface";
import { CalendarContext } from "./CalendarContext";

type CalendarProviderTye = {
	children: React.ReactNode;
};

export const CalendarProvider = ({ children }: CalendarProviderTye) => {
	const [events, setEvents] = useState<Dates[]>(initalDates as Dates[]);
	const [date, setDate] = useState<DateSelectArg | null>(null);

	const onSelectDate = (date: DateSelectArg) => {
		setDate(date);
	};
	const onAddNewEvent = (newEvent: Dates) => {
		setEvents([...events, newEvent]);
	};

	return (
		<CalendarContext.Provider
			value={{ events, date, onSelectDate, onAddNewEvent }}
		>
			{children}
		</CalendarContext.Provider>
	);
};
