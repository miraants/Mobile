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
import { GetAllProduct } from "../Hooks/useEnchere";
import "./index.css";
import { BaseUrl } from "../BaseUrl";
import { stringify } from "querystring";
import { useState } from "react";

const Faire_enchere: React.FC = () => {
  const [image, setImage] = useState<string>();
  const [res, setRes] = useState<string[]>([]);
  const user = localStorage.getItem("iduser");

  const convert = (e: any) => {
    const file = e.target.files;
    const liste: string[] = [];
    for (let index = 0; index < file.length; index++) {
      const reader = new FileReader();
      reader.readAsDataURL(file[index]);
      reader.onload = () => {
        const url = reader.result as string;
        setImage(url);
        liste[index] = url;
      };
    }
    setRes(liste);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = e.target;

    const produit = formData.elements.namedItem("produit").value;
    const duree = formData.elements.namedItem("duree").value;

    const obj = {
      id_utilisateur: user,
      id_produit: produit,
      daty: new Date(),
      duree: duree,
    };

    let tab = [];
    for (let i = 0; i < res.length; i++) {
      let m = {
        nom_sary: res[i],
        id_produit: produit,
      };
      tab[i] = m;
    }

    const enchere = {
      enchere: obj,
      photo: tab,
    };

    fetch(BaseUrl + "manao_enchere/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enchere),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.data);
        window.location.href = "/index";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { data, isLoading } = GetAllProduct();
  if (isLoading) {
    return <> </>;
  } else {
    return (
      <IonContent>
        <h1>Ajouter un enchère:</h1>

        <form onSubmit={handleSubmit}>
          <h3>
            Choisissez le produit :{" "}
            <select name="produit">
              {data.map((Produit: any, index: number) => {
                return (
                  <option key={Produit.id_produit} value={Produit.id_produit}>
                    {Produit.nom_produit}
                  </option>
                );
              })}
            </select>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <h3>
                  Durée
                  <input type="number" name="duree" />
                </h3>
              </div>
            </div>
          </div>
          <div>
            <input type="file" multiple onChange={convert} />
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

          {res?.map((e: any) => (
            <Image img={e} />
          ))}
        </form>
        <IonItem
          button
          detail={false}
          lines="none"
          className="speaker-item"
          href={`/rechargement`}
        >
          Recharger mon compte
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
const Image: React.FC<any> = (img) => {
  return (
    <p>
      <img src={img.img} width={50} height={50} />
    </p>
  );
};

export default Faire_enchere;
