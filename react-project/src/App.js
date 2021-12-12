import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileInfo from "./components/Profile/ProfileInfo/ProfileInfo";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPost} from "./redux/state";

const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile' element={<ProfileInfo state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

    );
};

export default App;
