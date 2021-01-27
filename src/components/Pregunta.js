import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>

      {error ? <Error mensaje="el presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto} />

      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu Presupuesto"
          onChange={definirPresupuesto}
        />

        <input type="submit" className="button-primary u-full-width" />
      </form>
    </Fragment>
  );
};

export default Pregunta;
