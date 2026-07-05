import BlogCard from "../components/BlogCard";

const blogs = [
  {
    _id: 1,
    title: "Learning MERN Stack",
    content:
      "Building projects is the fastest way to learn full-stack development.",
    author: {
      name: "Shaurya",
    },
  },
  {
    _id: 2,
    title: "React Components",
    content:
      "React applications are built by combining reusable components together.",
    author: {
      name: "John",
    },
  },
  {
    _id: 3,
    title: "Express Backend",
    content:
      "Express makes creating REST APIs simple and scalable for Node.js applications.",
    author: {
      name: "Admin",
    },
  },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold text-white mb-3">Scroll & Scribble</h1>

      <p className="text-slate-400 mb-10">
        Thoughts, stories and ideas worth sharing.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
