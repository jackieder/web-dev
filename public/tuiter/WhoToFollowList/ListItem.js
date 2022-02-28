const WhoToFollowListItem = (who) => {
   return (`
   <div class="list-group-item justify-content-start align-items-center">
   <img src="${who.avatarIcon}"><p>${who.userName}</p><p>${who.handle}</p>
   </div>
   `);
}

export default WhoToFollowListItem;
