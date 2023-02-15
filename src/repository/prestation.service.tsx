import PrestationModel from "../models/PrestationModel/prestation.model";

class PrestationService {
  static obtenirPrestations = async (): Promise<PrestationModel[]> => {
    return fetch("http://localhost:3001/prestations/").then((reponse) =>
      reponse.json().catch((erreur) => this.gestionErreur(erreur))
    );
  };

  static obtenirPrestationUnique = async (
    id: number
  ): Promise<PrestationModel> => {
    return fetch(`http://localhost:3001/prestations/${id}`).then((reponse) =>
      reponse.json().catch((erreur) => this.gestionErreur(erreur))
    );
  };

  static gestionErreur = (erreur: Error): void => {
    console.error(erreur);
  };
}

export default PrestationService;
