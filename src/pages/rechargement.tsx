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
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./index.css";
import { BaseUrl } from "../BaseUrl";

const Rechargement: React.FC = () => {
  const user = localStorage.getItem("iduser");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = e.target;

    const valeur = formData.elements.namedItem("valeur").value;

    let data = {
      valeur: valeur,
      id_utilisateur: user,
    };

    fetch(BaseUrl + "rechargement/insert", {
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rechargement de compte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rechargement de compte</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cat">Somme</label>
                  <input type="number" name="valeur" />
                </div>
              </div>
            </div>
            <br />

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

          {/* <Formik initialValues={}> </Formik> */}
        </IonContent>
      </IonContent>
      <IonItem
        button
        detail={false}
        lines="none"
        className="speaker-item"
        href={`/index`}
      >
        Retour
      </IonItem>
    </IonPage>
  );
};

export default Rechargement;
