import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  IonRadioGroup,
  IonList,
  IonRadio,
  IonButton,
  IonItemDivider,
  IonListHeader,
  IonText,
} from "@ionic/react";
import { useQuery } from "react-query";
import ExploreContainer from "../components/ExploreContainer";
import { GetCategorie } from "../Hooks/useEnchere";
import "./index.css";
import { BaseUrl } from "../BaseUrl";

const NouveauProduit: React.FC = () => {
  const user = localStorage.getItem("iduser");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = e.target;

    const cat = formData.elements.namedItem("categorie").value;
    const nom = formData.elements.namedItem("nom").value;
    const prix = formData.elements.namedItem("prix").value;

    let data = {
      nom_produit: nom,
      id_categorie: cat,
      prix_min: prix,
    };

    fetch(BaseUrl + "produit/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.data);
        window.location.href = "/faire_enchere";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { data, isLoading } = GetCategorie();
  if (isLoading) {
    return <> </>;
  } else {
    return (
      <IonContent>
        <h1>Ajouter un enchère:</h1>
        <form onSubmit={handleSubmit}>
          <h3>
            Choisissez la catégorie :
            <select name="categorie">
              {data.map((Categorie: any, index: number) => {
                return (
                  <option key="index" value={Categorie.id_categorie}>
                    {Categorie.nom_categorie}
                  </option>
                );
              })}
            </select>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <h3>
                  Nom du produit :
                  <input type="text" name="nom" />
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <h3>
                  Prix minimum de vente :
                  <input type="number" name="prix" />
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </form>
        <IonItem
          button
          detail={false}
          lines="none"
          className="speaker-item"
          href={`/rechargement`}
        >
          Rechargement de compte
        </IonItem>
        <IonItem
          button
          detail={false}
          lines="none"
          className="speaker-item"
          href={`/index`}
        >
          Retour
        </IonItem>
      </IonContent>
    );
  }
};

export default NouveauProduit;
