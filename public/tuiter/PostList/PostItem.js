const PostItem = (post) => {
    return (` <li class="list-group-item">
        <div class="row d-flex justify-content-start align-items-center">
           <div class="col-1 mx-1"><img src="${post.profilePic}" class="wd-profile-pic" alt="..."></div>
     <div class="col-10"><p class="h6 fw-bold text-white">${post.userName} <i
                        class="fa fa-check-circle-o"></i> <span class="h6 text-white-50">@${post.handle} - @${post.time}</span>
                </p>
                <p class="h6">${post.tweetContent}</p>
                </div>
    </li>`);
}

export default PostItem