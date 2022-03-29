import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import EditProfileItem from "./profile-screen/edit-profile";



const EditProfileScreen = () => {
    const profile = useSelector(
        state => state.profile);
    return(
        <>
            <EditProfileItem profile={profile[0]}/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/Labs">
                Labs
            </Link>
        </>
    );
}
export default EditProfileScreen;

