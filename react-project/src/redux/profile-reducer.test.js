import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'First post', likeCount: 4},
        {id: 3, message: 'Second post', likeCount: 24},
        {id: 4, message: 'Third post', likeCount: 14},
    ],
}

it('Added post', () => {
//1. test data
    const action = addPostActionCreator('New post');

    //2. Action
    const newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts.length).toBe(5)
})

it('Added post text', () => {
//1. test data
    const action = addPostActionCreator('New post');

    //2. Action
    const newState = profileReducer(state, action)

    //3. Expectation
  expect(newState.posts[4].message).toBe('New post')
})

it('delete post', () => {
//1. test data
    const action = deletePost(1);

    //2. Action
    const newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts.length).toBe(3)
})

it('incorrect id', () =>   {
//1. test data
    const action = deletePost(100000);

    //2. Action
    const newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts.length).toBe(4)
})