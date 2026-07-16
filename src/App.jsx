import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";

// Images
import development from "./assets/images/categories/development.png";
import marketing from "./assets/images/categories/marketing.jpg";
import finance from "./assets/images/categories/finance.jpg";
import design from "./assets/images/categories/design.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="categories">
        <h2>Browse By Category</h2>

        <div className="category-container">

          <CategoryCard
            title="Development"
            jobs="450"
            image={development}
          />

          <CategoryCard
            title="Marketing"
            jobs="320"
            image={marketing}
          />

          <CategoryCard
            title="Finance"
            jobs="180"
            image={finance}
          />

          <CategoryCard
            title="Design"
            jobs="270"
            image={design}
          />

        </div>
      </section>
    </>
  );
}

export default App;