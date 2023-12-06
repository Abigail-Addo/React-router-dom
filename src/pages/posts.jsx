
const Posts = ({ post }) => {
    return (
        <>

            <div className="card">
                <p className="fw-bold">{post.item}</p>
                <p className="text-justify">{post.summary}</p>
            </div>

        </>
    )
}

export default Posts
