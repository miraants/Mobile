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

const Inscription: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = e.target;

    const nom = formData.elements.namedItem("nom").value;
    const email = formData.elements.namedItem("email").value;
    const mdp = formData.elements.namedItem("mdp").value;

    let data = {
      nom: nom,
      email: email,
      mdp: mdp,
    };

    fetch(BaseUrl + "utilisateur/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.data);
        window.location.replace("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulaire d'inscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulaire d'inscription</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cat">Nom</label>
                  <input type="text" name="nom" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cat">Email</label>
                  <input type="text" name="email" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cat">Mot de passe</label>
                  <input type="text" name="mdp" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cat">Retapper le mot de passe</label>
                  <input type="text" />
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

          {/* <Formik initialValues={}> </Formik> */}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Inscription;
