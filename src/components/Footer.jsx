const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-center">
        <h3 className="text-xl font-bold text-purple-400 mb-2">
          Scroll & Scribble
        </h3>

        <p className="text-slate-400 mb-4">
          Share ideas, inspire people, and build your voice through writing.
        </p>

        <p className="text-sm text-slate-500">
          Built with React • Express • MongoDB • Node.js
        </p>

        <p className="text-xs text-slate-600 mt-4">
          © 2026 Scroll & Scribble. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
