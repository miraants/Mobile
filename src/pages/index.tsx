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
import { GetD } from "../Hooks/useEnchere";
import "./index.css";
const index: React.FC = () => {
  const user = localStorage.getItem("iduser") as string;
  const nomuser = localStorage.getItem("nomuser") as string;

  const { data, isLoading } = GetD(user);
  console.log(data);

  if (isLoading) {
    return <> </>;
  } else {
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
                <th></th>
                <th scope="col">Nom produit |</th>
                <th scope="col">Nom catégorie |</th>
                <th scope="col">Prix minimum |</th>
                <th>Duree en minute |</th>
                <th>Statut |</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((SaryProduit: any, index: number) => {
                console.log(SaryProduit);
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={SaryProduit.nom_sary}
                        alt={"No image avalaible"}
                        width="100px"
                      />
                    </td>
                    <td>{SaryProduit.nom_produit}</td>
                    <td>{SaryProduit.nom_categorie}</td>
                    <td>{SaryProduit.prix_min}</td>
                    <td>{SaryProduit.duree}</td>
                    <td>{SaryProduit.statut}</td>
                  </tr>
                );
              })}
            </tbody>
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
          <IonItem
            button
            detail={false}
            lines="none"
            className="speaker-item"
            href={`/notif`}
          >
            Notification
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }
};

export default index;
