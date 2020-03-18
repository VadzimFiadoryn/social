import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage}
                                                   newDialogText = {props.state.newDialogText}
                                                   updateNewDialogsText ={props.updateNewDialogsText}
                                                   addMessage = {props.addMessage}/> }/>

                    <Route path='/profile'
                           render={ () => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText ={props.updateNewPostText}
                               getNewPostText ={props.getNewPostText}/> }/>
                </div>
            </div>
        )
}

export default App;