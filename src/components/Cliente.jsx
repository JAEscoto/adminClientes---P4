import PropTypes from "prop-types";
import { Form, useNavigate } from "react-router-dom";

function Cliente({ cliente }) {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = cliente;
  //
  return (
    <tr className="border-b">
      <td className="p-6 space-y-1">
        {/* space-y-... sirve para hacerle un margin a los elementos dentro del td, asi para no colocarle uno
        por uno a los elementos */}
        <p className="text-xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefono}
        </p>
      </td>

      <td className="p-6 flex gap-5 ">
        <button
          type="button"
          className="text-violet-500 hover:text-violet-800 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("Desea eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-500 hover:text-red-800 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

// Cliente.propTypes = {
//   cliente: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     nombre: PropTypes.string.isRequired,
//     telefono: PropTypes.number.isRequired,
//     email: PropTypes.string.isRequired,
//     empresa: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Cliente;
