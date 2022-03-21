import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'Explore'
    }) => {
    return (
        <>
            <div className="list-group">
                <div className="list-group-item list-group-item-action">
                    <i class="fa fa-brands fa-twitter fa-inverse"></i>
                </div>
                <Link to="/tuiter/home" className={`list-group-item list-group-item-action ${active === 'Home' ? 'active' : ''}`}>
                        <i className="fa fa-home fa-inverse"></i><span> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag fa-inverse"></i><span> Explore</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Notifications' ? 'active' : ''}`}>
                    <i className="fa fa-bell fa-inverse"></i><span> Notifications</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Messages' ? 'active' : ''}`}>
                    <i className="fa fa-envelope fa-inverse"></i><span> Messages</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Bookmarks' ? 'active' : ''}`}>
                    <i className="fa fa-bookmark fa-inverse"></i><span> Bookmarks</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Lists' ? 'active' : ''}`}>
                    <i className="fa fa-file-alt fa-inverse"></i><span> Lists</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Profile' ? 'active' : ''}`}>
                    <i className="fa fa-user fa-inverse"></i><span> Profile</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'More' ? 'active' : ''}`}>
                   <span
                       className="fa-stack">
                        <i className="fa fa-regular fa-circle
                         fa-stack-1x fa-inverse fa-lg"></i>
                        <i className="fa fa-ellipsis-h fa-sm fa-stack-1x fa-inverse" ></i>
                    </span><span> More</span>
                </Link>

            </div>

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;