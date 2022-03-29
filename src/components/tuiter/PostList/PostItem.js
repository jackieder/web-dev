const PostItem = ({
                      post = {
                          profilePic: "../images/elonmuskprofile.jpeg",
                          userName: "Elon Musk",
                          handle: "elonmusk",
                          time: "23h",
                          tweetContent: "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
                          tweetPic: "../images/inspiration4x.jpeg",
                          picTitle: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          picSummary: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
                          picLink: "netflix.com",
                          replies: "4.2K",
                          retweets: "3.5K",
                          likes: "37.5K"
                      }
                  }) => {
    return (
        <>
    <li class="list-group-item">
        <div class="row d-flex justify-content-start align-items-center">
        <div class="col-1 mx-2"><img src={post.profilePic} class="wd-profile-pic" alt="..."/></div>
        <div class="col-10">
            <p class="h6 fw-bold text-white">{post.userName}
                <i class="fa fa-circle-check fa-inverse ps-1"></i> <span class="h6 text-white-50">@{post.handle} - {post.time}</span>
            </p>
            <p class="h6">${post.tweetContent}</p>
        </div>
         <div class="row d-flex justify-content-end align-items-center ps-4">
         <div class="col-11">
         {post.tweetPic ?
        <div class="card border-dark">
            <div class="card-body override-bs">
                <img src={post.tweetPic} class="card-img-top rounded border-bottom" alt="..."/>
                {post.picTitle ? <span class="card-text text-white mx-2">{post.picTitle}</span> : " "}
                {post.picSummary ? <p class="card-text text-white-50 mx-2">{post.picSummary}</p> : " "}
                {post.picLink ? <span class="card-text text-white-50 mx-2"><i class="fa fa-link"></i>{post.picLink}</span> : " "}
                </div>
            </div>
    : ' '}
        </div>
        </div>
        <div class="row d-flex justify-content-end align-items-center ps-4">
            <div class="col my-3 ps-5">
                <span class="text-white-50" ><i class="fa fa-comment"></i> {post.replies ? post.replies:""}</span>
            </div>
            <div class="col my-3 px-0">
                <span class="text-white-50" ><i class="fa fa-retweet" ></i> {post.retweets ? post.retweets:""}</span>
            </div>
            <div class="col my-3 px-0">
                <span class="text-white-50" ><i class="fa fa-heart"></i> {post.likes ? post.likes:""}</span>
            </div>
            <div class="col my-3 px-0">
                <span class="text-white-50" ><i class="fa fa-arrow-up-from-bracket"></i></span>
            </div>
        </div>
        </div>
    </li>
        </>
);
}

export default PostItem