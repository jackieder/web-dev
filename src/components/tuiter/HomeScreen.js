import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import PostList from "./PostList/PostList.js"
import WhoToFollowList from "./WhoToFollowList";



const HomeScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                    <PostList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/Labs">
                Labs
            </Link>
        </>
    );
}
export default HomeScreen;


