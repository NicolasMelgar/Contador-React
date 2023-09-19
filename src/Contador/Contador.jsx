import "./Contador.css";
import { useState } from "react";

export const Contador = ({ value }) => {
  const [contador, setContador] = useState(value);

  const handleClickMas = () => {
    setContador(contador + 1);
  };
  const handleClickMenos = () => {
    setContador(contador - 1);
  };
  const handleClickMasDiez = () => {
    setContador(contador + 10);
  };
  const handleClickMenosDiez = () => {
    setContador(contador - 10);
  };
  const reinicio = () => {
    setContador((value = 0));
  };

  return (
    <>
      <h1>Contador</h1>
      <h2>Esta es una buena herramienta para practicar sumas y restas</h2>
      <p>{contador}</p>
      <button onClick={() => handleClickMenos(value)}>Para restar 1</button>
      <button onClick={() => handleClickMas(value)}>Para sumar 1</button>
      <br />
      <button onClick={() => handleClickMenosDiez(value)}>Para restar 10</button>
      <button onClick={() => handleClickMasDiez(value)}>Para sumar 10</button>
      <br />
      <button onClick={() => reinicio(value)}>Reiniciar</button>
    </>
  );
};
