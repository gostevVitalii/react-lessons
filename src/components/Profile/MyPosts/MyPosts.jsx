import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)

    return (
        <div className={s.my_posts}>
            <h2>My Posts</h2>
            <NewPost />
            {postsElements}
        </div>
    )
}
export default MyPosts;