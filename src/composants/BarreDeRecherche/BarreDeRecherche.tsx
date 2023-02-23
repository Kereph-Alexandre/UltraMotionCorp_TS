import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import "../../styles/BarreDeRecherche.scss";

const BarreDeRecherche: React.FC = () => {
  const [motRecherche, changerMotRecherche] = useState("");
  const navigation = useNavigate();

  const soumettreRecherche = (event: React.FormEvent<HTMLElement>): void => {
    event.preventDefault();
    lancerLaRecherche(motRecherche);
  };

  const lancerLaRecherche = (MotRecherche: string): void => {
    navigation(`/recherche?motRecherche=${MotRecherche}`);
  };

  return (
    <form className="formRecherche" onSubmit={soumettreRecherche}>
      <input
        className="champRecherche"
        type="text"
        value={motRecherche}
        onChange={(event) => changerMotRecherche(event.target.value)}
        placeholder="Saisissez votre recherche ici"
      />

      <button className="boutonRecherche" onClick={soumettreRecherche}>
        <SearchIcon className="iconeRecherche" />
      </button>
    </form>
  );
};

export default BarreDeRecherche;
