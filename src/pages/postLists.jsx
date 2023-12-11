import { useEffect } from 'react'
// import Post from './posts'
import { Outlet, useNavigate } from 'react-router-dom';
import { usePost } from '../Context/PostContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostLists = () => {
  const { posts, setPosts } = usePost();
  const redirect = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const results = await fetch('http://localhost:9090/posts');
        const response = await results.json();
        console.log(response);
        setPosts(response);

      } catch (err) {
        console.error(err);
      }
    })();
  }, [])

  const deletePost = async (postId) => {
    try {
      const confirmed = confirm("Are you sure you want to delete this item");
      if (confirmed) {
        const result = await fetch(`http://localhost:9090/posts/${postId}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const response = await result.json()
        console.log(response)

        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
        toast.success('item deleted successfully');
        redirect('/')
     
      } else {
        toast.error('Failed to delete item')
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <ToastContainer />

      <div className="container py-5">
        {
          posts.map((post) => (
            <div className="card" key={post.id}>
              <p className="fw-bold">{post.item}</p>
              <p className="text-justify">{post.summary}</p>
              <div className='icons'>
                <DeleteIcon onClick={() => deletePost(post.id)} />
                <EditIcon />
              </div>

            </div>
          ))
        }
      </div>

      <Outlet />

    </>
  )
}
export default PostLists
