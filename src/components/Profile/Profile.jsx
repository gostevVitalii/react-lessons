import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

// let posts = [
//     { id: 1, message: 'One more post! I want more likes', likesCount: '99999' },
//     { id: 2, message: 'This is my first message!', likesCount: '5' },
// ]


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div >
    );
}

export default Profile;

