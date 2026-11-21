import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import CatalogHeader from "./components/catalog/CatalogHeader";
import CatalogSection from "./components/catalog/CatalogSection";
import Footer from "./components/layout/Footer";

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

      <Footer />
    </div>
  );
}

export default App;
