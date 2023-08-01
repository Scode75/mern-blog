import React, { useEffect, useState } from 'react'
import Post from '../Post'

function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://api-service-afvl.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>
        {posts.length > 0 && posts.map(post => (
          <Post {...post} />
        ))}
    </div>
  )
}

export default IndexPage
