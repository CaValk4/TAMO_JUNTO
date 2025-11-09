import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/tabs/tab1'); // Redireciona para a Home
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>TESTANTO A PORRA DO BOTÃO</h2>
        <IonButton expand="block" onClick={handleLogin}>
          Entrar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;


