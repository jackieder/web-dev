import { default as who } from "./who.js";
import WhoToFollowListItem from "./ListItem.js";

const WhoToFollowList = () => {
    return(`
<ul class="list-group">
 ${
        who.map(account => {
            return(WhoToFollowListItem(account));
        }).join('')
    }
</ul> `);
}

export default WhoToFollowList