import { CardContent, Chip, Divider, Rating } from "@mui/material";
import Card from "@mui/material/Card";

import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

import PrestationModel from "../../models/PrestationModel/prestation.model";

const Carte: React.FC<PrestationModel> = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={props.imageURL} />
        <CardContent>
          <>
            <h2 className="elementTitre titreCarte">{props.titre}</h2>
            <p>{props.tauxHoraire}</p>
            <Divider />
            <p className="elementTexte texteCarte">{props.description}</p>
            {props.categories.map((categorie) => (
              <Chip label={categorie} />
            ))}
            <Rating value={props.note} readOnly />
          </>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Carte;
