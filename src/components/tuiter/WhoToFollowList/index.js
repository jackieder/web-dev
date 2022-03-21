import whos from "./who.json";
import WhoToFollowListItem from "./ListItem.js";

const WhoToFollowList = () => {
    return(
        <ul>
            {
                whos.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );
}

export default WhoToFollowList