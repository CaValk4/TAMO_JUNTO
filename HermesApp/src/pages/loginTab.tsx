import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './loginTab.css';
import DefaultButton from '../components/Buttons/DefaultButton';
import loginImage from '../assets/images/loginTab/loginImage.png';
import tamojuntoLogo1 from '../assets/images/loginTab/tamojuntologo_1.png';

const LoginTab: React.FC = () => {
  const history = useHistory();

  const handleGoToCredentials = () => {
    history.push('/login/credentials');
  };

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        <div className="login-content">
          <img src={tamojuntoLogo1} alt="Tamojunto Logo" className="logo-image" />
          <img src={loginImage} alt="Login Illustration" className="login-image" />
          <div className="login-inner">
            <h2>Juntos, criamos momentos que valem mais que curtidas.</h2>
            <div className="button-row">
              <DefaultButton label="ENTRAR" onClick={handleGoToCredentials} />
              <DefaultButton label="CADASTRAR" />
            </div>
          </div>

          <footer className="login-footer">© 2025, BIG BANG.</footer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginTab;


