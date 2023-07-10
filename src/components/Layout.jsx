import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  /*md:min-h-screen hace que abarque la pantalla completa sin usar scroll
   * md:h-screen overflow-scroll mientras que este permite que abarque la pantalla
   * completa pero este si tenga scroll*/
  return (
    <div className="md: flex md:min-h-screen">
      <aside className="md:w-1/4 bg-violet-900 px-5 py-10">
        <h2 className="text-4xl font-black text-white text-center">CRM </h2>

        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/" ? "text-green-300" : "text-white"
            } text-xl block mt-2 hover:text-green-300`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-green-300"
                : "text-white"
            } text-xl block mt-2 hover:text-green-300`}
            to="/clientes/nuevo"
          >
            Nuevos Clientes
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
