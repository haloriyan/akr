import React from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import SidebarUser from "../../../partials/SidebarUser";
import EventMenu from "../../../partials/EventMenu";

const EventRundown = () => {
    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <EventMenu active={'rundown'} />
            <div className="content organizer">
                <h1 style={{margin: 0}}>Rundown</h1>
            </div>
        </>
    )
}

export default EventRundown;