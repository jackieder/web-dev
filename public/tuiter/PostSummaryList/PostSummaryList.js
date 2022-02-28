import { default as post } from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
<ul class="list-group">
 ${
        post.map(item => {
            return(PostSummaryItem(item));
        }).join('')
    }
</ul> `);
}

export default PostSummaryList