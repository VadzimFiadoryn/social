//import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log("state changes")
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: "000"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    newDialogText: "test text",
    sidebar: {}
}

export let updateNewDialogsText = (newText) => {
    state.newDialogText = newText;
    rerenderEntireTree(state);
}
export let addMessage = (postMessage) => {
    let newPost = {
        id: 0,
        name: "Dimych",
        message: state.newDialogText,
    };
    state.newDialogText = "";
    state.dialogsPage.messages.push(newPost);
    rerenderEntireTree(state);
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.newPostText = "";
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let getNewPostText = () => {
    return state.profilePage.newPostText;
}

export const subscribe = (observer) => {
 rerenderEntireTree = observer;
}

export default state;