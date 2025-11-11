import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './profileTab.css';

const profileTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Perfil" />
      </IonContent>
    </IonPage>
  );
};

export default profileTab;
