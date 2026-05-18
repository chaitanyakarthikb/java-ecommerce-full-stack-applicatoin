import "./SingleProduct.css";
const SingleProduct = () => {
  return (
    <section className="singleProduct">
      <div className="singleProduct--left">
        <img src="https://picsum.photos/id/1/150/150" alt="Product Name" />
      </div>
      <div className="singleProduct--right">
        <h1 className="singleProduct--right--heading">My Product Title</h1>
        <h2 className="singleProduct--right--sub--heading">My Product Price</h2>
        <p className="singleProduct--right--description">
          My Product Description are here and I am loving it because I love
          everything we do
        </p>
        <hr />
        <div className="singleProduct--right--bottom">
          <h2>$399.00</h2>
          <button className="right--bottom--button">Add to Cart</button>
          <h1>Stock Available: 10</h1>
          <div className="buttons">
            <button>UPDATE</button>
            <button>DELETE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
