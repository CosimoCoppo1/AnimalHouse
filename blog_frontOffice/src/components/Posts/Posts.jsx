import React, { useEffect } from "react";
import { getPosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  
  if(!posts) return 'No Posts';
  else{
    return (
      <div className="Posts">
        {loading
          ? "Fetching posts...."
          : posts.map((post, id) => {
              return <Post data={post} key={id} />;
            })}
      </div>
    );
  }
};

export default Posts;
