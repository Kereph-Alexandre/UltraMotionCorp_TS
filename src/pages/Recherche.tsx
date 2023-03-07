import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BarreDeRecherche from "../composants/BarreDeRecherche/BarreDeRecherche";
import GrilleCartes from "../composants/Presentation/GrilleCartes/GrilleCartes";
import PrestationModel from "../models/PrestationModel/prestation.model";
import PrestationService from "../service/prestation.service";

/**
 * Page de Recherche de prestation
 * @returns La page des résultats d'une recherche
 */
const Recherche: React.FC = () => {
  const [resultats, setResultats] = useState<PrestationModel[]>([]);

  const location = useLocation();
  const rechercheParams = new URLSearchParams(location.search);
  const motRecherche = rechercheParams.get("motRecherche") ?? "";

  useEffect(() => {
    const rechercheNorm = motRecherche
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    PrestationService.obtenirPrestations()
      .then((data) =>
        data.filter(
          (prestation) =>
            prestation.titre
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .includes(rechercheNorm.toLowerCase()) ||
            prestation.description
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .includes(rechercheNorm.toLowerCase()) ||
            prestation.categories.find((categorie) =>
              categorie
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(rechercheNorm.toLowerCase())
            )
        )
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
