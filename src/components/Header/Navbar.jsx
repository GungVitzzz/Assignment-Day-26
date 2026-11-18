function Navbar({ actionIcon }) {
  const icons = actionIcon.map((icon) => (
    <a key={icon.id} href="#">
      <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
    </a>
  ));

  return <nav className="flex items-center gap-8">{icons}</nav>;
}

export default Navbar;
