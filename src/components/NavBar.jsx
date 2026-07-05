import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-400">
          Scroll & Scribble
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-300 hover:text-purple-400 transition"
          >
            Home
          </Link>

          <Link
            to="/myblogs"
            className="text-slate-300 hover:text-purple-400 transition"
          >
            My Blogs
          </Link>

          <Link
            to="/createblog"
            className="text-slate-300 hover:text-purple-400 transition"
          >
            Create Blog
          </Link>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="text-slate-300 hover:text-purple-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
