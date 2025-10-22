import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button
        onClick={onLogin}
        style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        Entrar
      </button>
    </div>
  );
}
