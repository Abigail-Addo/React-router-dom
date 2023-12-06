import { useState, useEffect } from 'react'
import Post from './posts'
import { Outlet } from 'react-router-dom';


const PostLists = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try { 
        const results = await fetch ('http://localhost:7000/posts');
        const response = await results.json();
        console.log(response);
        setPosts(response);

      } catch (err) {
        console.error(err);
      }
    })();
  },  [])

  return (
    <>
      <div className="container py-5">
        {
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
      </div>

      <Outlet />

    </>
  )
}

export default PostLists
