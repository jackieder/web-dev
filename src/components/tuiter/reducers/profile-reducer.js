import profile from "../data/profiles.json";

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'change-profile':
            const newProfile = {
                handle: "sponge",
                name: action.profile.name,
                profilePicture: "https://images.viacbs.tech/uri/mgid:arc:imageassetref:nick.com:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7",
                bannerPicture: "https://pbs.twimg.com/profile_banners/36089672/1523244352/1500x500",
                bio: action.profile.bio,
                website: action.profile.website,
                location: action.profile.location,
                dateOfBirth: action.profile.dob,
                dateJoined: "4/2009",
                followingCount: 312,
                followersCount: 170

            }
            return [newProfile,
                ...state,
            ];
        default:
            return profile
    }
}

export default profileReducer;