let state = {
    profile: {
        posts: [
            { id: 1, message: 'One more post! I want more likes', likesCount: '99999' },
            { id: 2, message: 'This is my first message!', likesCount: '5' },
        ],
    },
    dialogs: {
        dialogs: [
            { id: 1, name: 'Dmitry' },
            { id: 2, name: 'Polina' },
            { id: 3, name: 'Andrey' },
            { id: 4, name: 'Sveta' },
            { id: 5, name: 'Paul' },
            { id: 6, name: 'Viktor' }
        ],
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'How is React-learning?' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' }
        ],
    },
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }
    state.profile.posts.push(newPost)

}
export default state;