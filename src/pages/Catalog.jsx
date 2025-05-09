import { useEffect, useState } from "react";
import api from "../services/api";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fazendo uma requisição para o endpoint /products
    api.get("/products")
      .then((response) => {
        setProducts(response.data); // Supondo que a API retorna uma lista de produtos
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li> // Substitua "name" pelo campo correto retornado pela API
        ))}
      </ul>
    </div>
  );
}

export default Catalog;