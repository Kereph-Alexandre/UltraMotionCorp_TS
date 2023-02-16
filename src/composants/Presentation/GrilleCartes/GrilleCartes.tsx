import PrestationModel from "../../../models/PrestationModel/prestation.model";
import Carte from "../../Carte/Carte";

import "../../../styles/GrilleCartes.scss";

type GrilleCartesProps = {
  listePrestations: PrestationModel[];
};

const GrilleCartes: React.FC<GrilleCartesProps> = ({ listePrestations }) => {
  return (
    <main className="conteneurCartes">
      {listePrestations.map((prestation, index) => (
        <Carte {...prestation} key={index} />
      ))}
    </main>
  );
};

export default GrilleCartes;
