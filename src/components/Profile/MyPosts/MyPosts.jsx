import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post messege='hi, are ou' like ='15'/>

        <Post messege='it my first post' like ='20'/>

      </div>
    </div>
  )

}

export default MyPosts;