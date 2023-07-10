import { getClientes } from "../data/clientes";
import { getCliente } from "../data/clientes";

export function loaderClientes() {
  const clientes = getClientes();

  return clientes;
}

export async function loaderEditarClientes({ params }) {
  const cliente = await getCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No hubo resultado del cliente solicitado",
    });
  }
  console.log(cliente);

  return cliente;
}

export default {
  loaderClientes,
  loaderEditarClientes,
};
