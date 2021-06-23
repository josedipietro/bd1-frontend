import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/product/Product";
import apiService from "../services/api-service";

import "./styles/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    apiService.getData().then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(fetchData, []);

  const onDelete = (id) => {
    apiService.deleteItem(id);

    const index = products.indexOf(products.filter((el) => el.id === id)[0]);
    products.splice(index, 1);

    setProducts([...products]);
  };

  return (
    <div className="Home">
      <div className="row">
        <h1>Productos</h1>
        <Link className="btn btn-warning" to="/agregar">
          Agregar Producto
        </Link>
      </div>
      <div className="row justify-content-center">
        {products.map((el) => (
          <div key={el.id} className="m-2" style={{ width: "auto" }}>
            <Product item={el} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
