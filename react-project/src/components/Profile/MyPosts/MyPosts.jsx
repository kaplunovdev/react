import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    console.log('RENDER')

    let postsElement = props.posts.map(el =>

        <Post
            post={el.id}
            message={el.message}
            likeCount={el.likeCount}
            key={el.id}
        />
    )


    const addPost = (values) => {
        props.addNewPost(values.newPost)
    }

    return (
        <div>
            <div className={style.input}>
                <MyPostsFormRedux onSubmit={addPost}/>
            </div>
            My posts:
            <div className={style.list}>
                {postsElement}
            </div>
        </div>
    );
})

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPost" placeholder="Enter new post..."
                   validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}
const MyPostsFormRedux = reduxForm({form: 'myPostsForm'})(MyPostsForm)
export default MyPosts;
