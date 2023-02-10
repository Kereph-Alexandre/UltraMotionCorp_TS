type PropBanniere = {
  titre?: string;
  texte: string;
  imageURL: string; //On changera en File type plus tard
};

const Banniere: React.FC<PropBanniere> = ({ texte, imageURL, titre }) => {
  return (
    <div className="conteneurBanniere">
      <div className="blocTexte">
        {titre ? <h2 className="titreBanniere">{titre}</h2> : <></>}
        <p className="texteBanniere">{texte}</p>
      </div>
      <img src={imageURL} alt={titre} />
    </div>
  );
};

export default Banniere;
