

function BlogComponent ({ blog }) {

    
    return (

        <div className="article-card"> 
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        </div>
    );
}

export default BlogComponent