import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileItem from "./profile-screen";



const ProfileScreen = () => {
    const profile = useSelector(
        state => state.profile);
    return(
        <>
            <ProfileItem profile={profile[0]}/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/Labs">
                Labs
            </Link>
        </>
    );
}
export default ProfileScreen;

