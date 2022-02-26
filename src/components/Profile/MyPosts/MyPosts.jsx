import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            <h2>My Posts</h2>
            <textarea name="new_post" id="" cols="60" rows="5"></textarea>
            <button>Send</button>

            <Post message='This is my first message!' likes='5' />



        </div>
    )
}
export default MyPosts;