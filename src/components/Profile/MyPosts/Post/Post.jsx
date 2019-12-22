import React from 'react';
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://c8.alamy.com/comp/K4AFFG/user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-K4AFFG.jpg" />
      post 1
        <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;