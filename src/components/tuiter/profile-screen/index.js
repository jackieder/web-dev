import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import './profile.css';

const ProfileItem = ({
                         profile = {
                             "name": "Spongebob",
                             "handle": "sponge",
                             "profilePicture": "https://images.viacbs.tech/uri/mgid:arc:imageassetref:nick.com:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7",
                             "bannerPicture": "https://pbs.twimg.com/profile_banners/36089672/1523244352/1500x500",
                             "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
                             "website": "youtube.com/webdevtv",
                             "location": "Boston, MA",
                             "dateOfBirth": "7/7/1968",
                             "dateJoined": "4/2009",
                             "followingCount": 312,
                             "followersCount": 180
                         }
                     }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="container p-0">
                <div className="row">
                    <img className="img-fluid " src={profile.bannerPicture}/>
                </div>
                <div className="d-flex pt-2 pb-2 justify-content-between">
                    <div className="ps-4"><img
                        className="wd-profilescreen-pic border border-light border-5 rounded-circle "
                        src={profile.profilePicture}/></div>
                    <Link to="/tuiter/profile/edit" className="btn btn-outline-dark rounded-pill float-right fw-bold">Edit Profile</Link>
                </div>
                <div className="row">
                    <h5 className="fw-bold pt-1">{profile.name}</h5>
                    <h6 className="text-muted">@{profile.handle}</h6>
                </div>
                <div>
                    <h6>{profile.bio}</h6>
                </div>
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-sm-auto">
                         <span className="text-muted">
                        <i className="fa fa-location-pin"></i> {profile.location}
                         </span>
                    </div>
                    <div className="col-sm-auto">
                         <span className="text-muted">
                        <i className="fa fa-cake-candles"></i> Born {profile.dateOfBirth}
                         </span>
                    </div>
                    <div className="col-sm-auto">
                         <span className="text-muted">
                        <i className="fa fa-calendar"></i> {profile.dateJoined}
                         </span>
                    </div>
                </div>
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-sm-auto">
                         <span className="text-muted">
                             <span className="fw-bold text-white">{profile.followingCount}</span> Following
                         </span>
                    </div>
                    <div className="col-sm-auto">
                         <span className="text-muted">
                             <span className="fw-bold text-white">{profile.followersCount}</span> Followers
                         </span>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProfileItem