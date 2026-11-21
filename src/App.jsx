import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import CatalogHeader from "./components/catalog/CatalogHeader";
import CatalogSection from "./components/catalog/CatalogSection";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50 border-b border-border backdrop-blur-3xl">
        <Header />
        <Navbar />
      </div>

      <main>
        <CatalogHeader />
        <CatalogSection />
      </main>
    </div>
  );
}

export default App;
