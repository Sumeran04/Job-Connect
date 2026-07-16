import "./CategoryCard.css";

function CategoryCard({ title, jobs, image }) {
  return (
    <div className="category-card">

      <img
        src={image}
        alt={title}
        className="category-image"
      />

      <h3>{title}</h3>

      <p>{jobs} Jobs Available</p>

    </div>
  );
}

export default CategoryCard;