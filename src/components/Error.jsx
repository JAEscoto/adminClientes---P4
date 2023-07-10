function Error({ children }) {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
      {children}
      {/* {JSON.stringify({ children })} */}
    </div>
  );
}

export default Error;

/* ERROR
    va a quedar con un error al momento de usar children y renderizarlo en el mensaje de error
    pero para que funque debo dejarlo con el JSON.stringify por alguna razon
*/
