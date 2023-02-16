import { useEffect, useState } from "react";
import Banniere from "../composants/Banniere/Banniere";
import Carte from "../composants/Carte/Carte";
import PrestationModel from "../models/PrestationModel/prestation.model";
import PrestationService from "../service/prestation.service";

const Accueil = () => {
  const [listePrestations, setListePrestations] = useState<PrestationModel[]>(
    []
  );

  useEffect(() => {
    PrestationService.obtenirPrestations().then((prestations) =>
      setListePrestations(prestations)
    );
  }, []);
  return (
    <>
      <Banniere
        titre="test"
        texte="truc"
        imageURL="https://img.freepik.com/free-photo/handyman-construction-site-process-drilling-wall-with-perforator_169016-12114.jpg?w=1800&t=st=1676042624~exp=1676043224~hmac=62e6514264dca8a3d4f75a45d6416e64e13505af42ebbb719575ced84e746053"
      />
      {listePrestations.map((prestation) => (
        <Carte {...prestation} />
      ))}
    </>
  );
};

export default Accueil;