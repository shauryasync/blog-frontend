import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const isOwner =
    user && (blog.author?._id === user._id || user.role === "admin");

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
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white mb-3 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-slate-400 leading-7 mb-6">
          {blog.content.length > 140
            ? blog.content.substring(0, 140) + "..."
            : blog.content}
        </p>
      </div>

      <div>
        <div className="border-t border-slate-800 pt-4 mb-4">
          <p className="text-sm text-slate-400">
            👤 {blog.author?.name || "Unknown"}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <Link
            to={`/blogs/${blog._id}`}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Read More →
          </Link>

          {isOwner && (
            <>
              <Link
                to={`/edit/${blog._id}`}
                className="text-yellow-400 hover:text-yellow-300 font-medium"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(blog._id)}
                className="text-red-400 hover:text-red-300 font-medium"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
