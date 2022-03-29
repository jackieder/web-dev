import React from "react";
import {Link} from "react-router-dom";
import TuitList from "./tuit-list";
import WhatsHappening from "./whats-happening";



const HomeScreen = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
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


