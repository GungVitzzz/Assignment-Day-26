import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";

function App() {
  const logo = {
    src: "/assets/brand-logo.png",
    alt: "logo brand"
  };
  const categories = ["Chair", "Table", "Sofa", "Dining", "Bed", "Interior"];

  return (
    <>
      <Header logo={logo} categories={categories} />
      <Catalog />
    </>
  );
}

export default App;
