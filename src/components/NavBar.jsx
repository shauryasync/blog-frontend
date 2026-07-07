import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="w-full px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition"
        >
          Scroll & Scribble
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-300 hover:text-purple-400 transition"
          >
            Home
          </Link>

          {token && (
            <>
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
            </>
          )}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-slate-300 hover:text-purple-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-slate-300 hover:text-purple-400"
          >
            Home
          </Link>

          {token ? (
            <>
              <Link
                to="/myblogs"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-purple-400"
              >
                My Blogs
              </Link>

              <Link
                to="/createblog"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-purple-400"
              >
                Create Blog
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-purple-400"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
