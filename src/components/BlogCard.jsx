import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
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
      </div>
    </div>
  );
};

export default BlogCard;
