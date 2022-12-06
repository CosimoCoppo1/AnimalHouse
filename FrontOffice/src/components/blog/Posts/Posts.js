import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from 'axios'
import "./Posts.css";

const Posts = ({shared, setShared}) => {
  const [posts, setposts] = useState(null)
  const [loading, setLoading] = useState(true)

  const getPosts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/posts')
      setposts(data) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts()
    
    setLoading(false)

    if(shared){
      setShared(false)
    }
   
  }, [shared, setShared]);

  
  if(posts === null || posts === []) return 'No Posts';
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
