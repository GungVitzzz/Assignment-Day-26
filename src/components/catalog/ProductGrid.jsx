import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { colorOptions, materialOptions } from "@/data/filters";

function ProductCard({ item }) {
  const color = colorOptions.find((c) => c.id === item.colorId);
  const material = materialOptions.find((m) => m.id === item.materialId);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border">
      <img
        src={item.image}
        alt={item.alt}
        className="aspect-square w-full object-cover"
      />

      <div className="flex flex-col gap-4 p-4">
        <h3 className="font-medium">{item.name}</h3>

        <div className="flex flex-wrap gap-3">
          <Badge>{color.label}</Badge>
          <Badge variant="secondary">{material.label}</Badge>
        </div>

        <p className="font-semibold">Rp {item.price.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductGrid;
