import CategoryItem from "../category-items/category-item";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <CategoryItem category={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Directory;
