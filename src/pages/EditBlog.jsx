import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${id}`);

        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/blogs/${id}`, {
        title,
        content,
      });

      alert("Blog updated successfully!");

      navigate("/myblogs");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-6">
      <form
        onSubmit={handleUpdate}
        className="bg-slate-900 border border-slate-800 rounded-xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

        <input
          type="text"
          className="w-full p-3 rounded-lg bg-slate-800 mb-5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="10"
          className="w-full p-3 rounded-lg bg-slate-800 mb-6 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
