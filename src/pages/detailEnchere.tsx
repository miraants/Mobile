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
} from "@ionic/react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import { GetAll } from "../Hooks/useEnchere";
import { GetMyEncheres } from "../Hooks/useEnchere";
import { GetAllSary } from "../Hooks/useEnchere";
import { GetDetails } from "../Hooks/useEnchere";
import "./index.css";
const DetailEnchere: React.FC = () => {
  // const user = localStorage.getItem("nomuser");
  const nomuser = localStorage.getItem("nomuser") as string;

 
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Liste de mes enchères:</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <table>
            <thead>
              <tr>
                <th>Nom personne |</th>
                <th scope="col">Nom produit |</th>
                <th scope="col">Prix minimum |</th>
                <th>Nom catégorie |</th>

                <th>Duree en minute |</th>
                <th>Statut |</th>
              </tr>
            </thead>
           
          </table>
          <IonItem
            button
            detail={false}
            lines="none"
            className="speaker-item"
            href={`/nouveauProduit`}
          >
            Ajouter un nouveau produit
          </IonItem>
          <IonItem
            button
            detail={false}
            lines="none"
            className="speaker-item"
            href={`/rechargement`}
          >
            Recharger mon compte
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }

export default DetailEnchere;
