import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/" className="text-purple-400">
        ← Back
      </Link>

      <h1 className="text-5xl font-bold mt-6 mb-6">{blog.title}</h1>

      <p className="text-slate-400 mb-8">By {blog.author?.name}</p>

      <p className="leading-8 whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
