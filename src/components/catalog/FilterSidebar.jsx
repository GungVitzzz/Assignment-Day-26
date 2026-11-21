import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { priceRange } from "@/data/filters";
import { useState } from "react";
import { filterStyle } from "@/data/styles";
import { colorOptions } from "@/data/filters";
import { materialOptions } from "@/data/filters";

function PriceFilter() {
  const [range, setRange] = useState([priceRange.min, priceRange.max]);

  return (
    <section className={filterStyle.section}>
      <h2 className="text-sm font-semibold">Price</h2>

      <Slider
        value={range}
        onValueChange={setRange}
        min={priceRange.min}
        max={priceRange.max}
        step={priceRange.step}
      />

      <div className="flex justify-between text-sm font-normal">
        <span>Rp {range[0].toLocaleString("id-ID")}</span>
        <span>Rp {range[1].toLocaleString("id-ID")}</span>
      </div>
    </section>
  );
}

function ColorFilter() {
  const colors = colorOptions.map((color) => (
    <div key={color.id} className="flex gap-x-3">
      <Checkbox id={color.id} />
      <span
        className="size-4 rounded-full"
        style={{ backgroundColor: color.hex }}
      ></span>
      <Label htmlFor={color.id}>{color.label}</Label>
    </div>
  ));

  return (
    <section className={filterStyle.section}>
      <h2 className={filterStyle.h2}>Color</h2>

      <div className="flex flex-col gap-y-4">{colors}</div>
    </section>
  );
}

function MaterialFilter() {
  const materials = materialOptions.map((mat) => (
    <div key={mat.id} className="flex gap-x-3">
      <Checkbox id={mat.id} />
      <Label htmlFor={mat.id}>{mat.label}</Label>
    </div>
  ));

  return (
    <section className={filterStyle.section}>
      <h2 className={filterStyle.h2}>Material</h2>

      <div className="flex flex-col gap-y-4">{materials}</div>
    </section>
  );
}

function FilterSidebar() {
  return (
    <aside className="w-60 shrink-0 space-y-4">
      <PriceFilter />
      <ColorFilter />
      <MaterialFilter />
    </aside>
  );
}

export default FilterSidebar;
