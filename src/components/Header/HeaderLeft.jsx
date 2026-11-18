import CategoryMenu from "./CategoryMenu";
import TopLogo from "./TopLogo";

function HeaderLeft({ logo, categories }) {
  return (
    <div className="flex flex-col justify-between px-5">
      <TopLogo logo={logo} />
      <CategoryMenu categories={categories} />
    </div>
  );
}

export default HeaderLeft;

// header ada dua div
// div 1 headerLeft
// dalam div 1 ada komponen logo dan categorymenu
// div 2 headerRight
// dalam div 2 ada headerAction dan dropdownmenu
