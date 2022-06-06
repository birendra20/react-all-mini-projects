import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataFetch1.css";

function DataFetchingP1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>{posts.title}</div>

      {posts.map((post) => (
        <div className="post">
          <p>id: {post.id}</p>
          <h4>title:{post.title}</h4>
          <p>Desc:{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DataFetchingP1;
