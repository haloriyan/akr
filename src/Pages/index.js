import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import EventDetail from "./Event";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/explore" Component={Explore} />
            <Route path="/event/detail" Component={EventDetail} />
        </Routes>
    )
}

export default PageRouter;