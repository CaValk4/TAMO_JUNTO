import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PERFIL</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="PERFIL" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
