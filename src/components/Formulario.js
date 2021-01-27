import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (cantidad < 0 || nombre.trim() === "" || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    console.log(gasto);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h1>agrega tus gastos aqui</h1>

      {error ? <Error mensaje="todos los campos deben completarse" /> : null}

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
