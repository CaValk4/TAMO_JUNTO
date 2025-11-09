import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab3 from "./pages/Tab3";
import Login from "./pages/login";

/* Core CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        {/* 🔹 Tela de Login fora das Tabs */}
        <Route exact path="/login" component={Login} />

        {/* 🔹 Tabs */}
        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/tab1" component={Tab1} />
              <Route exact path="/tabs/tab3" component={Tab3} />
              <Redirect exact from="/tabs" to="/tabs/tab1" />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tabs/tab1">
                <IonIcon icon={triangle} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="tab3" href="/tabs/tab3">
                <IonIcon icon={square} />
                <IonLabel>Perfil</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>

        {/* 🔹 Redirecionamento inicial */}
        <Redirect exact from="/" to="/login" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
