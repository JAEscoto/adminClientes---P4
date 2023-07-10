import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
} from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

// import Error from "../components/Error";

function EditarCliente() {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  console.log(cliente);
  return (
    <div>
      <h1 className="font-black text-4xl text-violet-900">Editar Cliente</h1>
      <p className="mt-3">Edite los datos que desee sobre este cliente</p>

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
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="w-full bg-violet-800 p-3 uppercase font-bold text-white text-lg mt-10"
            value="Actualizar Cliente"
          />
        </Form>
      </div>
    </div>
  );
}

export default EditarCliente;
