import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Index from "./pages/index";
import Login from "./pages/login";
import Inscription from "./pages/inscription";
import Faire_enchere from "./pages/faire_enchere";
import Rechargement from "./pages/rechargement";
import NouveauProduit from "./pages/nouveauProduit";
import DetailEnchere from "./pages/detailEnchere";
import Notif from "./pages/notif";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/index">
            <Index />
          </Route>

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/inscription">
            <Inscription />
          </Route>
          <Route exact path="/faire_enchere">
            <Faire_enchere />
          </Route>
          <Route exact path="/rechargement">
            <Rechargement />
          </Route>
          <Route exact path="/nouveauProduit">
            <NouveauProduit />
          </Route>
          <Route exact path="/detailEnchere">
            <DetailEnchere />
          </Route>
          <Route exact path="/notif">
            <Notif />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="index" href="/index">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="details" href="/details">
            <IonIcon icon={ellipse} />
            <IonLabel>Details</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
