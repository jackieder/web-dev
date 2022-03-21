const WhoToFollowListItem = ({
                                who = {
                                   avatarIcon: '../../../images/nasa.png',
                                   userName: 'NASA',
                                   handle: 'NASA',
                                }
                             }
) => {
   return (
       <>
   <li className="list-group-item d-flex justify-content-between align-items-center">
     <div className="col-2"><img src={who.avatarIcon} className="wd-profile-pic" alt="..."/></div>
     <div className="col-7"><p class="h6 text-white">{who.userName} <i
         className="fa fa-check-circle-o"></i>
                </p><p className="h6">@{who.handle}</p>
                </div>
     <div className="col-3">
                    <button className="btn btn-primary btn-block fw-bold rounded-pill" type="button">Follow</button>
                </div>
              
   </li>
       </>
   );
}

export default WhoToFollowListItem;
