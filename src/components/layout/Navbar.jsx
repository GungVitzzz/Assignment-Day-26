import { categories } from "@/data/headerAssets";
import { Button } from "@/components/ui/button";
import Container from "./Container";

function Navbar() {
  const category = categories.map((cat, index) => (
    <li key={cat + index}>
      <a href="#" className="font-medium">
        {cat}
      </a>
    </li>
  ));

  return (
    <nav>
      <Container className="flex items-center justify-between py-3">
        <ul className="flex gap-6">{category}</ul>
        <div className="flex items-center gap-3">
          <Button type="button">Explore</Button>
          <Button type="button" variant="outline">
            Sale
          </Button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
