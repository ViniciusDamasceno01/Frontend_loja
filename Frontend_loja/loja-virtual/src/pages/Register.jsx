import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // já configurado com o Axios

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users", { name: nome, email, phone: telefone, password:senha });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Criar Conta</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome:</label><br />
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Telefone:</label><br />
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label><br />
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
