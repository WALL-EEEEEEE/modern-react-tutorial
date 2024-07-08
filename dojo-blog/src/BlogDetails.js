import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory()
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, 
        {
            method: 'DELETE',
        }
    ).then(()=>{
        history.push("/")
    })
  }
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}

      {blog && (
        <div className="blog-details">
          <h2> {blog.title} </h2>
          <article>
            <h2>written by {blog.author}</h2>
            <div>
                {blog.body}
            </div>
            <button onClick={handleDelete}>Delete</button>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
