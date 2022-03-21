import React from "react";
import posts from "./post.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return(
        <ul className="ps-0">
            {
                posts.map(post => {
                    return(<PostSummaryItem post={post}/>);
                })
            }
        </ul>
    );
}

export default PostSummaryList