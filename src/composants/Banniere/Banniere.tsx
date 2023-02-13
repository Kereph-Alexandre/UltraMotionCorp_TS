import "../../styles/Banniere.scss";

type PropBanniere = {
  titre?: string;
  texte: string;
  imageURL: string; //On changera en File type plus tard
};

/**
 * Affiche une bannière comprenant un Titre, un texte et une image
 * @param param0
 * @returns
 */
const Banniere: React.FC<PropBanniere> = ({ texte, imageURL, titre }) => {
  return (
    <div className="conteneurBanniere">
      <div className="blocTexte">
        {titre ? (
          <h2 className="titreBanniere elementTitre">{titre}</h2>
        ) : (
          <></>
        )}
        <p className="texteBanniere elementTexte">{texte}</p>
      </div>
      <img src={imageURL} alt={titre} />
    </div>
  );
};

export default Banniere;
