import { Link } from "react-router-dom";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/blogs/${id}`);

      alert("Blog deleted successfully!");

      navigate(0);
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 hover:border-purple-500 transition">
      <h2 className="text-2xl font-semibold text-white mb-3">{blog.title}</h2>

      <p className="text-slate-400 mb-5">
        {blog.content.length > 120
          ? blog.content.substring(0, 120) + "..."
          : blog.content}
      </p>

      <div className="flex justify-between items-center text-sm text-slate-500">
        <span>{blog.author?.name || "Unknown"}</span>

        <Link
          to={`/blogs/${blog._id}`}
          className="text-purple-400 hover:text-purple-300"
        >
          Read More →
        </Link>
        <Link
          to={`/edit/${blog._id}`}
          className="text-yellow-400 hover:text-yellow-300"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(blog._id)}
          className="text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
