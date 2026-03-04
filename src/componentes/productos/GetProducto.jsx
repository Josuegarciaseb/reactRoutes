import React from "react";
import { use } from 'react';
const URL = "http://localhost:3000/api/productos/2";

const fetchProducto = async () => {
  const Producto = await fetch(URL);
  return Producto.json();
  
}

const productoPromise = fetchProducto();

function GetProducto() {
  const producto = use(productoPromise);
  return (
    <div>
      <h1>{producto.nombre}</h1>
    </div>
  )
}

export default GetProducto;