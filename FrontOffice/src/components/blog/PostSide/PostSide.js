import {React, useState} from "react";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const PostSide = () => {
  const [shared, setShared] = useState(false)
  return (
    <div className="PostSide">
      {localStorage.authToken && <PostShare setShared={setShared}/>}
      {!localStorage.authToken && <h6> Please <Link to="/login">login</Link> to share your post </h6>}
      <Posts shared={shared} setShared={setShared}/>
    </div>
  );
};

export default PostSide;
