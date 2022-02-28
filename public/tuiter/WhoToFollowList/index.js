import { default as who } from "./who.js";
import WhoToFollowListItem from "./ListItem.js";

const WhoToFollowList = () => {
    return(`
<div class="list-group">
 ${
        who.map(account => {
            return(WhoToFollowListItem(account));
        }).join('')
    }
</div> `);
}

export default WhoToFollowList