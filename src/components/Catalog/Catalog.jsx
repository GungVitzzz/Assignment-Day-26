import FilterSection from "./FilterSection/FilterSidebar";
import ProductList from "./ProductSection/ProductList";

function Catalog() {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 gap-6 shadow-lg shadow-black border border-black rounded-xl place-items-center">
      <FilterSection />
      <ProductList />
    </div>
  );
}

export default Catalog;
