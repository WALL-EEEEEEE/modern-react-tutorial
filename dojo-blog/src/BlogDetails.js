import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
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
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
