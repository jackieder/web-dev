import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowListItem from "./WhoToFollowList/index.js";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="Home"/>
            <WhoToFollowListItem/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </>
    )
};

export default Tuiter;
