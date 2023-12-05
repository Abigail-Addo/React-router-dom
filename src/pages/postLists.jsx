import { useState } from 'react'
import Post from './posts'


const PostLists = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      item: "Watch k drama",
      summary: "watch king the land"
    },
    {
      id: 2,
      item: "Watch k drama",
      summary: "watch king the land"
    },
    {
      id: 3,
      item: "Watch k drama",
      summary: "watch king the land"
    },
  ]);

  return (
    <>

        {
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }

    </>
  )
}

export default PostLists
