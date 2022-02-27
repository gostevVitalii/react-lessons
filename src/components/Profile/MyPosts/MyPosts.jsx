import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'One more post! I want more likes', likesCount: '99999' },
        { id: 2, message: 'This is my first message!', likesCount: '5' },
    ]
    return (
        <div className={s.my_posts}>
            <h2>My Posts</h2>

            <NewPost />
            <Post message={postsData[0].message} likes={postsData[0].likesCount} />
            <Post message={postsData[1].message} likes={postsData[1].likesCount} />



        </div>
    )
}
export default MyPosts;