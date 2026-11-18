function TopLogo({ logo }) {
  return (
    <div className="flex items-center gap-6">
      <img src={logo.src} alt={logo.alt} className="w-18 h-10" />
      <p className="text-2xl font-bold">Vivadium</p>
    </div>
  );
}

export default TopLogo;
