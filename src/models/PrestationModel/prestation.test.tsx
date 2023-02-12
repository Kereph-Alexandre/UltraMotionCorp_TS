import PrestationModel from "./prestation.model";

describe("Création d'une prestation", () => {
  it("doit avoir des valeurs par défaut", () => {
    const prestation = new PrestationModel(
      1,
      "title",
      "10",
      "",
      "image.jpg",
      "location",
      ["category"]
    );
    expect(prestation.datePublication).toEqual(new Date().toLocaleDateString());
    expect(prestation.nombreRealisations).toEqual(0);
    expect(prestation.note).toEqual(0);
  });

  it("doit avoir des valeurs correspondantes à celles renseignées", () => {
    const prestation = new PrestationModel(
      1,
      "titre",
      "10",
      "description",
      "image.jpg",
      "localisation",
      ["categorie1"]
    );
    expect(prestation.idEntreprise).toEqual(1);
    expect(prestation.titre).toEqual("titre");
    expect(prestation.tauxHoraire).toEqual(10);
    expect(prestation.description).toEqual("description");
    expect(prestation.imageURL).toEqual("image.jpg");
    expect(prestation.localisation).toEqual("localisation");
    expect(prestation.categories).toEqual(["categorie1"]);
  });
});
