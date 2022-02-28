import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import Post from './MyPosts/Post/Post';

let posts = [
    { id: 1, message: 'One more post! I want more likes', likesCount: '99999' },
    { id: 2, message: 'This is my first message!', likesCount: '5' },
]
let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount} />)

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={postsElements} />
        </div >
    );
}

export default Profile;

