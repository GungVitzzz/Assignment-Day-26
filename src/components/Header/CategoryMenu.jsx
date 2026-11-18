function CategoryMenu({ categories }) {
  const category = categories.map((item, index) => (
    <li
      key={item + index}
      className="text-sm font-semibold text-gray-800 tracking-wide"
    >
      <a href="#">{item}</a>
    </li>
  ));

  return <ul className="flex flex-wrap py-5 gap-12">{category}</ul>;
}

export default CategoryMenu;
