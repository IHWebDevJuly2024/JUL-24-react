import listOfProducts from "../dataset/products.json";
import ProductCard from "./ProductCard";
import "./MapFromDataSet.css";

/*
{students.map((eachDitto) => {
    return <li>{eachDitto}</li>;
})}

*/
function MapFromDataSet() {
  return (
    <ul className="cards-container">
      {listOfProducts.map((eachProduct, index) => {
        return <ProductCard key={index} eachProduct={eachProduct} />;
      })}
    </ul>
  );
}

export default MapFromDataSet;
