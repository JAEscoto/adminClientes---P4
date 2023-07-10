import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import router from "./router";
// import Layout from "./components/Layout";

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
 En este proyecto se usaron Actions y Loadres
 Los loaders se usan para jalar datos de una API o de un objeto
Mientras que Actions es para procesar la entrada de los datos de un Form

Ademas que tambien para los Actions es supuestamente necesario usar 
import { useNavigate, Form } from "react-router-dom";

  Navigate es buena opcion cuando se quiere volver atras mediante un boton.
  Link es buena opcion usarlo en una barra de navegacion y permitir la navegacion.
  Redirect es buena opcion cuando se utilizan loaders o actions y se quiere regresar 
al usuario a cierta pagina.

LAS 3 HACEN PRACTICAMENTE LO MISMO pero cada una es mejor usarla en ciertos momentos.
*/

/*
  En el file de Actions esta un validador de emails
*/

/*
Error Boundaries son componenetes de react que obtienen los errores en 
cualquier lugar del componente
*/
