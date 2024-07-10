import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useRef } from "react";
import events from "./data/events.json";
export const App = () => {
	const calendarRef = useRef<FullCalendar>(null);

	const handleDateClick = (info: DateClickArg) => {
		const calendarApi = calendarRef.current?.getApi();
		if (!calendarApi) return;

		calendarApi.changeView("timeGridDay", info.dateStr);
	};
	useEffect(() => {
		if (!calendarRef.current) return;

		const calendarApi = calendarRef.current.getApi();
		console.log("Calendario inicializado:", calendarApi);
	}, []);
	return (
		<div>
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
				dateClick={handleDateClick}
				events={events}
			/>
		</div>
	);
};
