const ProductCard = (props) => {
  //   const eachProduct = props.eachProduct;

  // we can destructure it
  // const { eachProduct } = props; // the destructuring is looking for a property inside props named "eachProduct"

  // to destructure name, description price..
  const {
    eachProduct: { name, description, price, size },
  } = props;

  // This is like:
  /*
  const name = props.eachProduct.name
  const description = props.eachProduct.description
  etc
  */

  return (
    <li className="card">
      <p>{props.eachProduct.name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{size}</p>
      <button>Add to cart</button>
    </li>
  );
};

export default ProductCard;
