class PrestationModel {
  id!: number;
  idEntreprise: number;
  titre: string;
  categories: string[];
  tauxHoraire: string;
  localisation: string;
  description: string;
  imageURL: string;
  datePublication: string = new Date().toLocaleDateString(); //Date fixée à la création
  nombreRealisations: number = 0;
  note: number = 0;

  constructor(
    idEntreprise: number,
    titre: string,
    tauxHoraire: string,
    description: string = "",
    imageURL: string,
    localisation: string,
    categories: string[]
  ) {
    this.idEntreprise = idEntreprise;
    this.titre = titre;
    this.tauxHoraire = tauxHoraire;
    this.description = description;
    this.imageURL = imageURL;
    this.localisation = localisation;
    this.categories = categories;
  }
}

export default PrestationModel;
