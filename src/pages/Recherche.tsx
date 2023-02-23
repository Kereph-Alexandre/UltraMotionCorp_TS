import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BarreDeRecherche from "../composants/BarreDeRecherche/BarreDeRecherche";
import GrilleCartes from "../composants/Presentation/GrilleCartes/GrilleCartes";
import PrestationModel from "../models/PrestationModel/prestation.model";
import PrestationService from "../service/prestation.service";

const Recherche: React.FC = () => {
  const [resultats, setResultats] = useState<PrestationModel[]>([]);

  const location = useLocation();
  const rechercheParams = new URLSearchParams(location.search);
  let motRecherche = rechercheParams.get("motRecherche") ?? "";

  useEffect(() => {
    PrestationService.obtenirPrestations()
      .then((data) =>
        data.filter((prestation) => prestation.titre.includes(motRecherche))
      )
      .then((data) => setResultats(data));
  }, [motRecherche]);

  return (
    <>
      <BarreDeRecherche />
      <GrilleCartes listePrestations={resultats} />
    </>
  );
};

export default Recherche;
