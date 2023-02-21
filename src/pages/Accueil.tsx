import { useEffect, useState } from "react";
import Banniere from "../composants/Banniere/Banniere";
import GrilleCartes from "../composants/Presentation/GrilleCartes/GrilleCartes";
import PrestationModel from "../models/PrestationModel/prestation.model";
import PrestationService from "../service/prestation.service";

const Accueil = () => {
  const [listePrestations, setListePrestations] = useState<PrestationModel[]>(
    []
  );

  const titrePresentation: string = "Projet UltraMotionCorp";

  const textPresentation: string =
    "Bienvenue sur le projet UltraMotionCorps. D'abord réalisé (en partie) en tant que projet fil rouge durant ma formation POEC Développeur Front-End en ReactJS, je le reprend ici en utilisant ReactTS.  ";

  useEffect(() => {
    PrestationService.obtenirPrestations().then((prestations) => {
      setListePrestations(prestations);
    });
  }, []);

  useEffect(() => console.log(listePrestations), [listePrestations]);
  return (
    <>
      <Banniere
        titre={titrePresentation}
        texte={textPresentation}
        imageURL="https://img.freepik.com/free-photo/handyman-construction-site-process-drilling-wall-with-perforator_169016-12114.jpg?w=1800&t=st=1676042624~exp=1676043224~hmac=62e6514264dca8a3d4f75a45d6416e64e13505af42ebbb719575ced84e746053"
      />

      {listePrestations.length > 0 ? (
        <GrilleCartes listePrestations={listePrestations} />
      ) : (
        <p>...Loading</p>
      )}
    </>
  );
};

export default Accueil;
