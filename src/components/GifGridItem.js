import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__headShake">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

/*
1. Enzyme
2. Enzyme to json
3. Debe de mostrar el componente correctamente:
  utilicen shallow, luego el shallow va a generarles algo que va a llamarse wrapper
  Luego debemos evaluar que ese wrapper haga match con toMatchSnapshot()
4. Revisen en la carpeta de pruebas que el enzyme to json se hizo correctamente 
*/

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
