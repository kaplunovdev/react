import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";

export let dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Richard'},
]

export let messages = [
    {id: 1, message: 'messages'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'My name is Alexandr'},
    {id: 4, message: 'Hi boy'},
]

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 1, message: 'First post', likeCount: 4},
]

export let postsElement = posts.map(el =>
    <Post
        post={el.id}
        post={el.message}
        post={el.likeCount}
    />
)





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
