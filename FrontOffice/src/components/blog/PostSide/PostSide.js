import {React, useState} from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const PostSide = () => {
  const [shared, setShared] = useState(false)
  return (
    <div className="PostSide">
      <PostShare setShared={setShared}/>
      <Posts shared={shared} setShared={setShared}/>
    </div>
  );
};

export default PostSide;
