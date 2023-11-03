import { BrowserRouter } from "react-router-dom";
import PageRouter from "./Pages";
import './App.css';
import UserRouter from "./Pages/User";
import OrganizerRouter from "./Pages/Organizer";
import EventRouter from "./Pages/Organizer/Event/index";

const App = () => {
	return (
		<BrowserRouter>
			<PageRouter />
			<UserRouter />
			<OrganizerRouter />
			<EventRouter />
		</BrowserRouter>
	)
}

export default App