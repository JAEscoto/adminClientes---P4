import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente from "./pages/NuevoCliente";
import {
  actionNuevoCliente,
  actionEditarCliente,
  actionEliminarCliente,
} from "./components/Actions";
import Index from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarCliente from "./pages/EditarCliente";
import { loaderClientes, loaderEditarClientes } from "./components/Loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderClientes,
        errorElement: (
          <ErrorPage />
        ) /* En caso de ocurrir un error se manda a llamar este componente el cual muestra una pagina con la descripcion del error*/,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement: <ErrorPage />,
      },
      //Para hacer dinamico y poder hacer el edit
      // ":loQueSea" que esta en el path, alli puedo poner lo que sea ya que solo es un texto temp debido a que en Cliente.jsx se llena con el id
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: loaderEditarClientes,
        action: actionEditarCliente,
        errorElement: (
          <ErrorPage />
        ) /* En caso de ocurrir un error se manda a llamar este componente el cual muestra una pagina con la descripcion del error*/,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: actionEliminarCliente,
      },
    ],
  },
]);

export default router;
