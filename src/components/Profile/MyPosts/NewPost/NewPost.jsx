import React from "react";
import s from './NewPost.module.css';

const NewPost = () => {
    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className="newPost">
            <textarea name="new_post" id="" cols="60" rows="2" ref={newPostElement}></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
}
export default NewPost;