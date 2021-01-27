import React, { useState } from "react";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  return (
    <form>
      <h1>agrega tus gastos aqui</h1>

      <div className="campo">
        <label>Nombre Gasto</label>

        <input
          type="text"
          className="u-full-width"
          placeholder="ej.Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad de Gasto</label>

        <input
          type="number"
          className="u-full-width"
          placeholder="ingrese gasto"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="agregar gasto"
      />
    </form>
  );
};

export default Formulario;
