import { RouteObject, useRoutes } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Recherche from "../pages/Recherche";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Accueil /> },
    { path: "/recherche", element: <Recherche /> },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Router;
