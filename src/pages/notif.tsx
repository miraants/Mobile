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
import { useEffect } from "react";
import Push from "push.js";

const Notif: React.FC = () => {
  var notification = () => {
    Push.create("Les enchères sont tous en cours...");
  };
  return (
    <>
      <IonButton onClick={notification}>Afficher Notif</IonButton>
    </>
  );
};

export default Notif;
