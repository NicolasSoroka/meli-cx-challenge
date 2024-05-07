import { Link } from "react-router-dom";
import ProfileIcon from "../components/Icons/ProfileIcon";
import CheckIcon from "../components/Icons/CheckIcon";
import CardIcon from "../components/Icons/CardIcon";
import { ROUTES } from "../constants/routes";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <div className="rounded-lg bg-white shadow-lg m-4 md:mx-auto md:w-[300px]">
        <div className="flex flex-col items-center text-center p-4">
          <h1>Hola!</h1>
          <p>Este proyecto esta hecho con Vite, React y TypeScript</p>
          <p>Tailwind para estilos y animaciones</p>
          <p>React-router-dom para la navegacion</p>
          <p>Y Axios junto a React-query para el manejo de request</p>
          <p>🫡</p>
        </div>
        <h2 className="text-meli_blue border-t p-2 text-center text-xs font-semibold">
          Gracias por su tiempo!
        </h2>
      </div>

      <ul className="flex flex-col md:mx-auto gap-y-2">
        <Link to={ROUTES.PROFILE_URL} className="px-4 py-2 hover:bg-slate-100 bg-white rounded-lg shadow transition-colors">
          <div className="flex items-center">
            <div className="flex relative w-16 h-w-16">
              <span className="border border-slate-400 p-4 rounded-full">
                <ProfileIcon />
              </span>
              <span className="flex items-center justify-center h-4 w-4 absolute bottom-0 right-2.5 bg-meli_green rounded-full">
                <CheckIcon color="#FFFFFF" size="10" />
              </span>
            </div>
            <div>
              <p className="text-sm">Mi perfil</p>
              <p className="text-sm">Informacion detallada de tu cuenta</p>
            </div>
          </div>
        </Link>

        <Link to={ROUTES.PROFILE_URL} className="px-4 py-2 hover:bg-slate-100 bg-white rounded-lg shadow transition-colors">
          <div className="flex items-center">
            <div className="flex relative w-16 h-w-16">
              <span className="border border-slate-400 p-4 rounded-full">
                <CardIcon />
              </span>
              <span className="flex items-center justify-center h-4 w-4 absolute bottom-0 right-2.5 bg-meli_green rounded-full">
                <CheckIcon color="#FFFFFF" size="10" />
              </span>
            </div>
            <div>
              <p className="text-sm">Mis compras</p>
              <p className="text-sm">Detalles acerca de tus compras</p>
            </div>
          </div>
        </Link>
      </ul>
    </main>
  );
};

export default HomePage;
