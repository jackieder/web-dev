const WhoToFollowListItem = (who) => {
    let listItem = `
<li class="list-group-item d-flex justify-content-start align-items-center">
<div class="col-2"><img src="${who.avatarIcon}"class="wd-profile-pic wd-img-invert" alt="..."></div>
                <div class="col-7 pt-1 pb-0 px-0"><p class="h6 text-white">${who.userName} <i
                        class="fa fa-check-circle-o"></i> <span class="h6 text-white-50"></span>
                </p><p class="h6 override-bs">@${who.handle}</p>
                </div>
                <div class="col-3 p-0">
                    <button class="btn btn-light fw-bold rounded-pill" type="button">Follow</button>
                </div>

</div></li>`

    return listItem
}

export default WhoToFollowListItem;
