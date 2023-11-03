import React from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import SidebarUser from "../../../partials/SidebarUser";
import EventMenu from "../../../partials/EventMenu";
import Stage from "../../../components/Stage";
import Button from "../../../components/Button";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const EventStage = () => {
    const navigate = useNavigate();

    const stages = [
        {
            title: "Eagle",
            description: "Lorem ipsum dulu aja",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922011910.jpg"
        },
        {
            title: "MAIN STAGE",
            description: "Lorem ipsum dulu aja",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230926120219_651265db31ebb.jpg"
        },
        {
            title: "Eagle",
            description: "Lorem ipsum dulu aja",
            cover: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922011910.jpg"
        },
    ];

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <SidebarUser show={false} />
            <EventMenu active={'stage'} />
            <div className="content organizer">
                <div className="inline">
                    <h1 style={{margin: 0,display: 'flex',flexGrow: 1}}>Stage</h1>
                    <Button onClick={() => navigate('/event/stage/create')}>
                        <BiPlusCircle />
                        Add Stage
                    </Button>
                </div>

                <Stage stages={stages} />
            </div>
        </>
    )
}

export default EventStage;