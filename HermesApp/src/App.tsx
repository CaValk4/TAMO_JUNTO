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
import HomebarTab from "./pages/homebarTab";
import ProfileTab from "./pages/profileTab";
import LoginTab from "./pages/loginTab";
import HomeIcon from "./assets/images/navBar/HomeIconSVG.svg";
import PerfilIcon from "./assets/images/navBar/PerfilIconSVG.svg";
import LoginTabCredentials from "./pages/loginTab_2";

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
  <Route exact path="/login" component={LoginTab} />
  <Route exact path="/login/credentials" component={LoginTabCredentials} />

        {/* 🔹 Tabs */}
        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/homebarTab" component={HomebarTab} />
              <Route exact path="/tabs/profileTab" component={ProfileTab} />
              <Redirect exact from="/tabs" to="/tabs/homebarTab" />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tabs/homebarTab">
                <IonIcon icon={HomeIcon} />
              </IonTabButton>

              <IonTabButton tab="tab3" href="/tabs/profileTab">
                <IonIcon icon={PerfilIcon} />
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
