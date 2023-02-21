import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={soumettreRecherche}>
      <input
        type="text"
        value={motRecherche}
        onChange={(event) => changerMotRecherche(event.target.value)}
      />

      <button onClick={soumettreRecherche}>OK</button>
    </form>
  );
};

export default BarreDeRecherche;
