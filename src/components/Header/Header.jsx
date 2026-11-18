import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

function Header({ logo, categories }) {
  return (
    <header className="max-w-6xl h-43 mx-auto pt-6 flex justify-between rounded-xl">
      <HeaderLeft logo={logo} categories={categories} />
      <HeaderRight />
    </header>
  );
}

export default Header;

// header ada dua div
// div 1 headerLeft
// dalam div 1 ada komponen logo dan categorymenu
// div 2 headerRight
// dalam div 2 ada headerAction dan dropdownmenu
