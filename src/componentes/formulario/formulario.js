import { useState } from "react";
import "./formulario.css";
import Campo from "../campo";
import ListaOpciones from "../listaopciones";
import Boton from "../boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envío");
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color })
  }
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Completa el formulario para crear un nuevo colaborador</h2>
        <Campo 
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton>Registrar Colaborador</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Completa el formulario para crear un nuevo equipo</h2>
        <Campo 
          titulo="Título"
          placeholder="Ingresar Título"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar color en formato Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
