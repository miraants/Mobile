import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { setCacheNameDetails } from "workbox-core";
import { BaseUrl } from "../BaseUrl";
import { LoginAdmin } from "../Hooks/useEnchere";

const Login: React.FC = () => {
  const [email, setEmail] = useState("mirantsoa@gmail.com");
  const [mdp, setMdp] = useState("usr2");
  const history = useHistory();

  const [error, setError] = useState("");

  const login = (e: any) => {
    e.preventDefault();
    // const formData = e.target;

    //  let ip = localStorage.getItem("ip");
    let url = BaseUrl + "utilisateur/login";
    console.log("url: " + url);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, mdp: mdp }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("iduser", data.id_utilisateur);
        localStorage.setItem("nomuser", data.nom);

        window.location.replace("/index");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form onSubmit={login}>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  onIonChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Mot de passe</IonLabel>
                <IonInput
                  type="password"
                  value={mdp}
                  onIonChange={(e: any) => setMdp(e.target.value)}
                />
              </IonItem>
              {error && <p>{error}</p>}
              <IonButton
                className="ion-margin-top"
                type="submit"
                expand="block"
                onClick={login}
              >
                Se connecter
              </IonButton>
            </form>
            <IonItem
              button
              detail={false}
              lines="none"
              className="speaker-item"
              href={`/inscription`}
            >
              S'inscrire
            </IonItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
