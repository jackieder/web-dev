import React from "react";

const NavigationSidebar = (
    {
        active = 'Explore'
    }) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item list-group-item-action" href="/"><i class="fa fa-brands fa-twitter fa-inverse"
                                                                              ></i></a>
                <a className={`list-group-item list-group-item-action ${active === 'Home' ? 'active' : ''}`}
                   href="../HomeScreen/home.html"><i className="fa fa-home fa-inverse"
                                                     ></i><span> Home</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'Explore' ? 'active' : ''}`}
                   href="../ExploreScreen/explore.html"><i className="fa fa-hashtag fa-inverse"
                                                          ></i><span> Explore</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'Notifications' ? 'active' : ''}`}
                   href="/"><i className="fa fa-bell fa-inverse" ></i><span> Notifications</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'Messages' ? 'active' : ''}`} href="/"><i
                    className="fa fa-envelope fa-inverse" ></i><span> Messages</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'Bookmarks' ? 'active' : ''}`} href="/"><i
                    className="fa fa-bookmark fa-inverse" ></i><span> Bookmarks</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'Lists' ? 'active' : ''}`} href="/"><i
                    className="fa fa-file-alt fa-inverse"></i><span> Lists</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'Profile' ? 'active' : ''}`} href="/"><i
                    className="fa fa-user fa-inverse"></i><span> Profile</span></a>
                <a className={`list-group-item list-group-item-action ${active === 'More' ? 'active' : ''}`} href="/"><span
                    className="fa-stack">
                        <i className="fa fa-regular fa-circle
                         fa-stack-1x fa-inverse ps-2 wd-font-15em pe-2"></i>
                        <i className="fa fa-ellipsis-h fa-stack-2x fa-inverse fa-xs pt-3 ps-1" ></i>
                    </span><span> More</span></a>

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