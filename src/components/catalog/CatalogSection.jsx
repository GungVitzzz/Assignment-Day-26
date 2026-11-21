import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import Container from "../layout/Container";

function CatalogSection() {
  return (
    <section>
      <Container className="flex gap-6 py-6">
        <FilterSidebar />
        <ProductGrid />
      </Container>
    </section>
  );
}

export default CatalogSection;
