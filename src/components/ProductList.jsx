import productsArray from "../dataset/products_platzy.json";
import "./ProductList.css";

function ProductList() {
  // CONDITIONAL RENDERING
  function renderEmoji(dittoTitle) {
    if (dittoTitle === "Creativity") {
      return dittoTitle + " 🤯";
    } else {
      return dittoTitle;
    }
  }

  // we are going to create a feature only for admins

  const isAdmin = true;

  return (
    <ul className="product-card-container">
      {productsArray.map(({ id, title, category, price }) => {
        return (
          <li className="product-card" key={id}>
            <img src={category.image} alt={title} />
            <p>{renderEmoji(title)}</p>
            <p>Price: {price}$</p>
            {/* THIS IS THE TERNARY OPERATOR 
                condition ? return if true : return if false
                It's a way of simplifying if-else statements
            */}
            <p>Category: {category.name === "Shoes" ? "👟" : category.name}</p>
            <button className={category.name === "Shoes" ? "blue" : "gray"}>
              Add to cart
            </button>
            {
              // conditional rendering with the AND operator
              isAdmin && <button>Edit</button>
            }
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
