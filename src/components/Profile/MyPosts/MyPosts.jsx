import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'One more post! I want more likes', likesCount: '99999' },
        { id: 2, message: 'This is my first message!', likesCount: '5' },
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount} />)

    return (
        <div className={s.my_posts}>
            <h2>My Posts</h2>
            <NewPost />
            {postsElements}
        </div>
    )
}
export default MyPosts;