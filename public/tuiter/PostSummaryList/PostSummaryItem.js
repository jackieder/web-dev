const PostSummaryItem = (post) => {
   return (` <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
        <div class="col-8">
            <p class="h6 text-white-50">${post.topic}</p>
            <p class="h6 text-white">${post.userName} <i class="fa fa-check-circle-o"></i> <span
                class="h6 text-white-50">${post.time}</span></p>
            <p class="h6 text-white">${post.title}</p>
            <p class="h6">${post.tweets ? post.tweets:' '}</p>
        </div>
        <div class="col-2">
            <img src="${post.image}" class="wd-feed-picture" alt="...">
        </div>
    </li>`);
}

export default PostSummaryItem