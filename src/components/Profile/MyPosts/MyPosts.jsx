import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            <h2>My Posts</h2>

            <NewPost />
            <Post message='One more post! I want more likes' likes='99999' />
            <Post message='This is my first message!' likes='5' />



        </div>
    )
}
export default MyPosts;