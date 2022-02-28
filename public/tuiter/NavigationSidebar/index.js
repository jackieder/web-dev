const NavigationSidebar = (active) => {
    return (`
<div class="list-group">
 <a class="list-group-item list-group-item-action" href="#"><i class="fa fa-twitter fa-inverse" style="font-size: 1.25em"></i></a>
 <a class="list-group-item list-group-item-action ${active === 'Home' ? "active": " "}" href="../HomeScreen/home.html"><i class="fa fa-home fa-inverse" style="font-size: 1.25em"></i><span> Home</span></a>
 <a class="list-group-item list-group-item-action ${active === 'Explore' ? "active": " "}" href="../ExploreScreen/explore.html"><i class="fa fa-hashtag fa-inverse" style="font-size: 1.1em"></i><span> Explore</span></a>
 <a class="list-group-item list-group-item-action ${active === 'Notifications' ? "active": " "}" href="#"><i class="fa fa-bell-o fa-inverse" style="font-size: 1.1em"></i><span> Notifications</span></a>
 <a class="list-group-item list-group-item-action ${active === 'Messages' ? "active": " "}" href="#"><i class="fa fa-envelope-o fa-inverse" style="font-size: 1.1em"></i><span> Messages</span></a>
 <a class="list-group-item list-group-item-action ${active === 'Bookmarks' ? "active": " "}" href="#"><i class="fa fa-bookmark-o fa-inverse" style="font-size: 1.1em"></i><span> Bookmarks</span></a>   
 <a class="list-group-item list-group-item-action ${active === 'Lists' ? "active": " "}" href="#"><i class="fa fa-file-text-o fa-inverse" style="font-size: 1.1em"></i><span> Lists</span></a>           
 <a class="list-group-item list-group-item-action ${active === 'Profile' ? "active": " "}" href="#"><i class="fa fa-user-o fa-inverse" style="font-size: 1.1em"></i><span> Profile</span></a>           
 <a class="list-group-item list-group-item-action ${active === 'More' ? "active": " "}" href="#"><span class="fa-stack">
                        <i class="fa fa-circle-thin fa-stack-1x fa-inverse ps-2 " style="font-size: 1.5em"></i>
                        <i class="fa fa-ellipsis-h fa-stack-2x fa-inverse pt-2 ps-2" style="font-size: 1em"></i>
                    </span><span> More</span></a>           
 
</div>

<div class="d-grid mt-2">
<a href="tweet.html"
class="btn btn-primary btn-block rounded-pill">
Tweet</a> </div>
`);
}
export default NavigationSidebar;