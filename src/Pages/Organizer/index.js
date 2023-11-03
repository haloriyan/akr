import { Route, Routes } from "react-router-dom";
import OrganizerEvent from "./Event";
import OrganizerBilling from "./Billing";
import OrganizerLegality from "./Legality";
import OrganizerActivities from "./Activities";
import OrganizerTeam from "./Team";
import OrganizerBank from "./Bank";
import OrganizerSettings from "./Settings";

import CreateEvent from "./Event/Create";

const OrganizerRouter = () => {
    return (
        <Routes>
            <Route path="/organizer/events" Component={OrganizerEvent} />
            <Route path="/organizer/billing" Component={OrganizerBilling} />
            <Route path="/organizer/legality" Component={OrganizerLegality} />
            <Route path="/organizer/activities" Component={OrganizerActivities} />
            <Route path="/organizer/team" Component={OrganizerTeam} />
            <Route path="/organizer/bank-account" Component={OrganizerBank} />
            <Route path="/organizer/settings" Component={OrganizerSettings} />

            <Route path="/organizer/:organizerID/create-event" Component={CreateEvent} />
        </Routes>
    )
}

export default OrganizerRouter;