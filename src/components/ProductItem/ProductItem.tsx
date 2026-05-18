import "./ProductItem.css";

const ProductItem = (props:{product:any}) => {
  const { product } = props;
  return (
    <div className="productItem">
      <div>
        <img src={product.image} alt={product.name} />
      </div>

      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductItem
