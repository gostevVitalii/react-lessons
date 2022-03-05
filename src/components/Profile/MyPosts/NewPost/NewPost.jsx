import React from "react";
import s from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
        <div className="new-post">
            <textarea name="new_post" id="" cols="60" rows="2" ref={newPostElement}></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
}
export default NewPost;