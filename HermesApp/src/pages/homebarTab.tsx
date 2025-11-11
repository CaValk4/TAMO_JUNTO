import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './homebarTab.css';

const homebarTab: React.FC = () => {
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
        <ExploreContainer name="Home" />
      </IonContent>
    </IonPage>
  );
};

export default homebarTab;
