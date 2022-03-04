import React from 'react';
import s from './NewMessage.module.css';

const NewMessage = () => {
    let newMessageElement = React.createRef()
    let sendNewMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }

    return (
        <div>
            <textarea name="new-message" id="" cols="30" rows="1" ref={newMessageElement}>Type a new message</textarea>
            <button onClick={sendNewMessage}>Send</button>
        </div>
    )
}
export default NewMessage