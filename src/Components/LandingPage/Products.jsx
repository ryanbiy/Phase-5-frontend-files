import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:9292/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const filterProducts = (category) => {
    const updatedList = products.filter((product) => product.category.trim().toLowerCase() === category.trim().toLowerCase());
    setFilteredProducts(updatedList);
  };
  
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilteredProducts(products)}>
            All
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>
          Men's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>
          Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('jewelry')}>
          Jewelry
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('electronics')}>
          Electronics
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('alcoholic drinks')}>
          Alcoholic Drinks
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredProducts.map((product) => (
            <div className="col mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 18)}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <p className="lead fw-bolder">
                    Rating: {product.rating.rate}
                    <i className="fas fa-star"></i>
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-dark" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark ms-2">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container-lg my-4 py-4">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;