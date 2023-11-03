import { Route, Routes } from "react-router-dom";
import EventDashboard from "./Dashboard";
import EventTicket from "./Ticket";
import EventRundown from "./Rundown";
import EventStage from "./Stage";
import EventSponsor from "./Sponsor";
import EventHandbook from "./Handbook";
import EventSelling from "./Selling";
import EventBroadcast from "./Broadcast";
import EventLanding from "./Landing";
import EventCertificate from "./Certificate";
import EventStageCreate from "./StageCreate";

const EventRouter = () => {
    return (
        <Routes>
            <Route path="/event/dashboard" Component={EventDashboard} />
            <Route path="/event/ticket" Component={EventTicket} />
            <Route path="/event/rundown" Component={EventRundown} />
            <Route path="/event/stage" Component={EventStage} />
            <Route path="/event/stage/create" Component={EventStageCreate} />
            <Route path="/event/sponsor" Component={EventSponsor} />
            <Route path="/event/handbook" Component={EventHandbook} />
            <Route path="/event/selling" Component={EventSelling} />
            <Route path="/event/certificate" Component={EventCertificate} />
            <Route path="/event/broadcast-info" Component={EventBroadcast} />
            <Route path="/event/landing-page" Component={EventLanding} />
        </Routes>
    )
}

export default EventRouter;