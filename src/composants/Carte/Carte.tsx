import { CardContent, Chip, Divider, Rating } from "@mui/material";
import Card from "@mui/material/Card";

import CardActionArea from "@mui/material/CardActionArea";
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
      <CardActionArea>
        <CardMedia component="img" image={props.imageURL} />
        <CardContent className="contenuDeCarte">
          <div className="enteteCarte">
            <h2 className="elementTitre titreCarte">{props.titre}</h2>
            <p className="elementTexte">{props.tauxHoraire}</p>
          </div>
          <Divider />
          <p className="elementTexte texteCarte">{props.description}</p>
          <div className="piedDePageCarte">
            {props.categories.map((categorie) => (
              <Chip label={categorie} />
            ))}
            <Rating value={props.note} readOnly />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Carte;
