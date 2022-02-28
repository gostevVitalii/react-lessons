import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    return (
        <div className={s.my_posts}>
            <h2>My Posts</h2>
            <NewPost />
            {props.posts}
        </div>
    )
}
export default MyPosts;