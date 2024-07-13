import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { CalendarApp } from "../pages/CalendarApp";
import { CalendarForm } from "../pages/CalendarForm";
import { MyDates } from "../pages/MyDates";

export const AppRouter = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<CalendarApp />} />
				<Route path="/my-dates" element={<MyDates />} />

				<Route path="/form/:date?" element={<CalendarForm />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
