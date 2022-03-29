import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./explore-screen";


const ExploreScreen = () => {
    return (
        <>
            <ExploreComponent/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/Labs">
                Labs
            </Link>
        </>
    );
}
export default ExploreScreen;
