import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import './profile.css';

const EditProfileItem = (
    {
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
    }
) => {
    const dispatch = useDispatch();
    let [editProfile, saveEditProfile] = useState('');
    const saveProfile = () => {
        saveEditProfile(editProfile);
    }
    const changeProfile = () => {
        dispatch({type: 'change-profile', profile: changedProfile});
    };

    let name = profile.name;
    let bio = profile.bio;
    let website = profile.website;
    let dob = profile.dateOfBirth;
    let location = profile.location;

    let changedProfile = {
        "name" : name,
        "bio" : bio,
        "website" : website,
        "dob" : dob,
        "location": location
    }

    const nameHandler = (event) => {
        changedProfile.name = event.target.value;
    }
    const bioHandler = (event) => {
        changedProfile.bio = event.target.value;
    }
    const websiteHandler = (event) => {
        changedProfile.website = event.target.value;
    }
    const dobHandler = (event) => {
        changedProfile.dob = event.target.value;
    }
    const locationHandler = (event) => {
        changedProfile.location = event.target.value;
    }
    return (
        <>
            <div className="container p-0">
                <div className="d-flex justify-content-between align-items-center m-1">
                    <span className="h5 fw-bold">
                        <Link to="/tuiter/profile">
                    <i onClick={() =>
                      saveProfile()}
                       className="fas fa-remove fa-md
                  fa-pull-left"></i>
                        </Link>
                    Edit Profile
                    </span>
                    <Link to="/tuiter/profile" className="btn btn-dark rounded-pill fw-bold" onClick={() =>
                        changeProfile()}>Save</Link>
                </div>
                <div className="row">
                    <img className="img-fluid " src={profile.bannerPicture}/>
                    <div className="ps-4"><img className="wd-editprofile-pic border border-light border-5 rounded-circle " src={profile.profilePicture}/></div>
                </div>
                <div className="row pt-5">
                    <label for="nameField" className="form-label mt-4">Name</label>
                    <input type="text" className="form-floating form-control" id="nameField"
                           defaultValue={profile.name} onChange={(event) =>
                         nameHandler(event)}/>

                </div>
                <div className="row">
                    <label htmlFor="bioField" className="form-label mt-4">Bio</label>
                    <textarea className="form-floating form-control" id="bioField"
                           defaultValue={profile.bio} onChange={(event) =>
                        bioHandler(event)}/>

                </div>
                <div className="row">
                    <label htmlFor="locationField" className="form-label mt-4">Location</label>
                    <input type="text" className="form-floating form-control" id="locationField"
                           defaultValue={profile.location} onChange={(event) =>
                        locationHandler(event)}/>

                </div>
                <div className="row">
                    <label htmlFor="websiteField" className="form-label mt-4">Website</label>
                    <input type="text" className="form-control" id="websiteField"
                           defaultValue={profile.website} onChange={(event) =>
                        websiteHandler(event)}/>

                </div>
                <div className="row">
                    <label htmlFor="dobField" className="form-label mt-4">Date of Birth</label>
                    <textarea className="form-floating form-control" id="dobfield"
                              defaultValue={profile.dateOfBirth} onChange={(event) =>
                        dobHandler(event)}/>

                </div>

            </div>

        </>

    );
}

export default EditProfileItem