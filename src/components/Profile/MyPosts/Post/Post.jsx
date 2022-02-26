import React from "react";
import avatar from './avatar.jpg';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={avatar} alt="Profile avatar" />
            <div>{props.message}</div>
            <div><span>{props.likes}Likes</span></div>
        </div>


    )
}
export default Post;
