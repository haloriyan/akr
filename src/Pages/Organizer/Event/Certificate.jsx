import React from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import EventMenu from "../../../partials/EventMenu";

const EventCertificate = () => {
    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <EventMenu active={'certificate'} />
            <div className="content organizer">
                <h1 style={{margin: 0}}>Sertifikat</h1>
            </div>
        </>
    )
}

export default EventCertificate;