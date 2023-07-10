import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

function NuevoCliente() {
  const errores = useActionData();
  const navigate = useNavigate();

  console.log(errores);
  return (
    <>
      <h1 className="font-black text-4xl text-violet-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena los campos para registrar clientes</p>

      <div className="flex justify-end">
        <button
          className="bg-violet-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
          // navigate -1 funca para volver 1 pagina atras al darle click
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario />
          <input
            type="submit"
            className="w-full bg-violet-800 p-3 uppercase font-bold text-white text-lg mt-10"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
