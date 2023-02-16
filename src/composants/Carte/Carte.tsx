import { CardContent, Chip, Divider, Rating } from "@mui/material";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import "../../styles/Carte.scss";

import PrestationModel from "../../models/PrestationModel/prestation.model"; //Import de données direct en attendant la mise en place du CMS

/**
 * Affiche une carte de l'élément Prestation passé en argument
 * @param props Une prestation existante
 * @returns
 */
const Carte: React.FC<PrestationModel> = (props) => {
  return (
    <Card className="cartePrestation">
      <CardMedia component="img" image={props.imageURL} />
      <CardContent className="contenuCarte">
        <div className="enteteCarte">
          <h2 className="elementTitre titreCarte">{props.titre}</h2>
          <p className="elementTexte prixCarte">{props.tauxHoraire}€/H</p>
          <Divider />
        </div>
        <p className="elementTexte texteCarte">{props.description}</p>
        <div className="piedDePageCarte">
          {props.categories.map((categorie) => (
            <Chip label={categorie} />
          ))}
          <Rating value={props.note} readOnly />
        </div>
      </CardContent>
    </Card>
  );
};

export default Carte;
