import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/blogs", {
        title,
        content,
      });

      alert("Blog created successfully!");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-slate-800 rounded-xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 mb-5"
        />

        <textarea
          rows="10"
          placeholder="Write your blog..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 mb-6 resize-none"
        />

        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
