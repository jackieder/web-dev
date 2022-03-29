import React from "react";
import WhoToFollowListItem from "./ListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whos = useSelector(state => state.who);
    return(
        <ul className="p-0">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <h5>Who to follow</h5>
            </li>
            {
                whos.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
}

export default WhoToFollowList