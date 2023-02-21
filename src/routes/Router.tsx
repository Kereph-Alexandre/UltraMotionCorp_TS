import { RouteObject, useRoutes } from "react-router-dom";
import Accueil from "../pages/Accueil";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Accueil /> },
    { path: "/recherche", element: <Accueil /> },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Router;
