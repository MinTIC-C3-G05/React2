import axios from "axios";
import React,{useEffect,useState} from "react";



export default function PersonList() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("/todos").then((response) => {
      setPost(response.data);
      console.log(response.data)
      
    });
  }, []);

  if (!post) return null;

  return (
    <div className="col">
     
      {post.map(post => <div key={post._id}>{post.todo}</div>)}
    </div>
  );
}