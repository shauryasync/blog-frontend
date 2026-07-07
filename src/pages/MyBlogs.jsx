import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import api from "../services/api";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        console.log("user: ", user);
        console.log("blogs: ", response.data);

        const myBlogs = response.data.filter(
          (blog) => blog.author?._id === user._id,
        );
        console.log("my blogs: ", myBlogs);

        setBlogs(myBlogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">My Blogs</h1>

      {blogs.length === 0 ? (
        <p className="text-slate-400">You haven't written any blogs yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
