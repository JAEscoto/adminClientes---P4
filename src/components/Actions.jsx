import { postCliente, putCliente, deleteCliente } from "../data/clientes";
import { redirect } from "react-router-dom";

export async function actionNuevoCliente({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  //Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  //esto es para validar el email
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es valido");
  }

  // console.log(errores);
  //Retornar datos en caso de errores
  if (Object.keys(errores).length) {
    return errores;
  }
  await postCliente(datos);
  return redirect("/");
}

export async function actionEditarCliente({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  //Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  //esto es para validar el email
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es valido");
  }

  // console.log(errores);
  //Retornar datos en caso de errores
  if (Object.keys(errores).length) {
    return errores;
  }

  //Actualizar cliente
  await putCliente(params.clienteId, datos);
  return redirect("/");
}

export async function actionEliminarCliente({ params }) {
  await deleteCliente(params.clienteId);
  return redirect("/");
}

export default {
  actionNuevoCliente,
  actionEditarCliente,
  actionEliminarCliente,
};
