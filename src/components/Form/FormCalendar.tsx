import { DateSelectArg } from "@fullcalendar/core/index.js";
import { addMinutes, format } from "date-fns";
import { useEffect, useState } from "react";
import { formatDateLocal } from "../../helpers/formatDateLocal";

type CalendarFormProps = {
	data: DateSelectArg | null;
};
export const FormCalendar = ({ data }: CalendarFormProps) => {
	const [formData, setFormData] = useState({
		name: "",
		startDate: "",
		endDate: "",
	});
	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	useEffect(() => {
		if (data) {
			setFormData((prevData) => ({
				...prevData,
				startDate: formatDateLocal(data.startStr),
				endDate: data.endStr,
			}));
		}
	}, [data]);
	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					onChange={(ev) =>
						setFormData((prev) => ({ ...prev, name: ev.target.value }))
					}
				/>
				<input
					type="datetime-local"
					value={formData.startDate}
					onChange={(e) => {
						const parse = format(e.target.value, "yyyy-MM-dd'T'HH:mm:ss");
						const endDate = addMinutes(parse, 30);
						console.log(parse);

						setFormData((prev) => ({
							...prev,
							startDate: parse,
							endDate: format(endDate, "yyyy-MM-dd'T'HH:mm:ss"),
						}));
					}}
					id="date"
				/>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};
