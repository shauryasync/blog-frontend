import { Link } from "react-router-dom";
const token = localStorage.getItem("token");
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
        </div>

        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-slate-300 hover:text-purple-400"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-purple-600 px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/myblogs"
                className="text-slate-300 hover:text-purple-400"
              >
                My Blogs
              </Link>

              <Link
                to="/createblog"
                className="text-slate-300 hover:text-purple-400"
              >
                Create Blog
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                }}
                className="bg-red-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
