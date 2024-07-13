import "./App.css";
import { CalendarProvider } from "./context/CalendarProvider";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
	return (
		<CalendarProvider>
			<AppRouter />
		</CalendarProvider>
	);
};
