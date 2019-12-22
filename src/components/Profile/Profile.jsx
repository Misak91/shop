import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts" 

const Profile = () => {
    return   <div>
    <div>
      <img src="https://scx1.b-cdn.net/csz/news/800/2019/nasamoonrock.jpg"/>
    </div>
    
    <div>avatar + disp</div>
    <MyPosts/>
  </div>
}

export default Profile;