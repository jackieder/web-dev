const WhoToFollowListItem = (who) => {
   return (`
   <li class="list-group-item d-flex justify-content-between align-items-center">
     <div class="col-2"><img src="${who.avatarIcon}" class="wd-profile-pic" alt="..."></div>
     <div class="col-7"><p class="h6 text-white">${who.userName} <i
                        class="fa fa-check-circle-o"></i>
                </p><p class="h6">@${who.handle}</p>
                </div>
     <div class="col-3">
                    <button class="btn btn-primary btn-block fw-bold rounded-pill" type="button">Follow</button>
                </div>
              
   </li>
   `);
}

export default WhoToFollowListItem;
