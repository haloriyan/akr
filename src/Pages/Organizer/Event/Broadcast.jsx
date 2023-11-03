import React from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import EventMenu from "../../../partials/EventMenu";

const EventBroadcast = () => {
    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <EventMenu active={'broadcast-info'} />
            <div className="content organizer">
                <h1 style={{margin: 0}}>Broadcast Info</h1>
            </div>
        </>
    )
}

export default EventBroadcast;