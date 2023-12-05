

const Posts = ({ post }) => {
    return (
        <>
            <div className="card">
                <p>{post.item}</p>
                <p>{post.summary}</p>
            </div>
        </>
    )
}

export default Posts
