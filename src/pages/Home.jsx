import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
          Scroll & Scribble
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          A place where ideas become stories. Share your thoughts, explore
          inspiring blogs, and express yourself through writing.
        </p>

        <Link
          to={token ? "/createblog" : "/login"}
          className="inline-block bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-semibold"
        >
          {token ? "Start Writing" : "Join Now"}
        </Link>
      </section>

      {/* Blog Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Blogs</h2>

          <p className="text-slate-400">
            {blogs.length} Blog{blogs.length !== 1 && "s"}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-400 text-lg">
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-700 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              No blogs published yet
            </h3>

            <p className="text-slate-400 mb-6">
              Be the first one to share a story with the community.
            </p>

            {token && (
              <Link
                to="/create"
                className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg"
              >
                Create First Blog
              </Link>
            )}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
