import { DateSelectArg, EventClickArg } from "@fullcalendar/core/index.js";
import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction/index.js";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCalendar } from "../hooks/useCalendar";

export const CalendarApp = () => {
	const { onSelectDate, events } = useCalendar();
	const calendarRef = useRef<FullCalendar>(null);
	const navigate = useNavigate();

	const handleDateClick = (info: DateClickArg) => {
		const calendarApi = calendarRef.current?.getApi();
		if (!calendarApi) return;

		calendarApi.changeView("timeGridDay", info.dateStr);
	};

	const handleEventClick = (select: EventClickArg) => {
		console.log(select);
		// onSelectDate(select);
		navigate(`/form`);
		// console.log(select);
	};
	const hanfleSeelct = (select: DateSelectArg) => {
		onSelectDate(select);
		navigate(`/form`);
		// console.log(select);
	};

	return (
		<FullCalendar
			ref={calendarRef}
			weekends={true}
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			hiddenDays={[0]}
			locale={esLocale}
			initialView="dayGridMonth"
			headerToolbar={{
				start: "dayGridMonth,timeGridDay",
			}}
			businessHours={[
				// Horarios de la mañana
				{
					daysOfWeek: [1, 2, 3, 4, 5, 6],
					startTime: "09:00",
					endTime: "14:00",
				},
				// Horarios de la tarde
				{
					daysOfWeek: [1, 2, 3, 4, 5, 6],
					startTime: "17:00",
					endTime: "21:00",
				},
			]}
			selectConstraint={"businessHours"}
			slotMinTime={"09:00:00"}
			slotMaxTime={"22:00:00"}
			slotDuration={"00:30:00"}
			slotLabelInterval={"00:30:00"}
			slotLabelFormat={{
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			}}
			displayEventEnd={false}
			events={events}
			dateClick={handleDateClick}
			eventClick={handleEventClick}
			selectable={true}
			select={hanfleSeelct}
		/>
	);
};
