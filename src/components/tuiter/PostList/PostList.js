import homePosts from "./homePosts.json";
import PostItem from "./PostItem";
import React from "react";

const PostList = () => {
    return(
        <ul className="ps-0">
            {
                homePosts.map(post => {
                    return(<PostItem post={post}/>);
                })
            }
        </ul>
    );

}

export default PostList