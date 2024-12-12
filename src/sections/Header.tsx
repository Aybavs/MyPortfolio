export const Header = () => {
  return (
    <div className="flex justify-center items-center top-3 sticky z-50 ">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-gradient-to-r from-emerald-300/80 to-sky-400/80">
        <a href="#hero" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};
