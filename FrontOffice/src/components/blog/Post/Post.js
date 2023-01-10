import React from "react";
import "./Post.css";
import Comment from "../../../img/comment.png";
import Share from "../../../img/share.png";
import Heart from "../../../img/like.png";
import apiUrl from '../../../config'




const Post = ({ data }) => {   

  return (
    <div className="Post">

      <h4>
        <span> {data.user.username} </span>
      </h4>

      <img
        src={data.image ? `http://${apiUrl}/images/` + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={ Heart}
          alt=""
          style={{ cursor: "pointer" }}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <div className="detail">
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
