import React from "react";
import s from './NewPost.module.css';

const NewPost = () => {

    return (
        <div className="newPost">
            <textarea name="new_post" id="" cols="60" rows="2"></textarea>
            <button>Send</button>
        </div>
    )
}
export default NewPost;