import { DateSelectArg } from "@fullcalendar/core/index.js";
import { createContext } from "react";
import { Dates } from "../interfaces/dates.interface";

type CalendarContextType = {
	events: Dates[];
	onAddNewEvent: (newEvent: Dates) => void;
	date: DateSelectArg | null;
	onSelectDate: (date: DateSelectArg) => void;
};

export const CalendarContext = createContext<CalendarContextType>({
	events: [],
	onAddNewEvent: () => {},

	date: null,
	onSelectDate: () => {},
});
