import { useEffect, useState } from "react";
import api from "../services/api";

function Catalog() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await api.get("/products");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos();
  }, []);

  return (
  <div style={{ padding: "20px" }}>
    <h2>Catálogo de Produtos</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.02)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          {/* Imagem */}
          {produto.imagem ? (
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontStyle: "italic",
              }}
            >
              Sem imagem
            </div>
          )}

          <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>
            {produto.nome}
          </h3>
          <p style={{ fontWeight: "bold", color: "#28a745" }}>
            R$ {produto.preco?.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  </div>
);

}

export default Catalog;
