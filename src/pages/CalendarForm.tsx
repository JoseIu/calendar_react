import { FormCalendar } from "../components/Form/FormCalendar";
import { useCalendar } from "../hooks/useCalendar";

export const CalendarForm = () => {
	const { date } = useCalendar();

	return (
		<div>
			<h1>Calendario para pedir CITA!</h1>
			<FormCalendar data={date} />
		</div>
	);
};
