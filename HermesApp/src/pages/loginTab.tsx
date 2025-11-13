import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./css/loginTab.css";
import DefaultButton from "../components/Buttons/DefaultButton";
import loginImage from "../assets/images/loginTab/loginImage.png";
import tamojuntoLogo1 from "../assets/images/loginTab/tamojuntologo_1.png";

const LoginTab: React.FC = () => {
  const history = useHistory();

  const handleGoToCredentials = () => {
    history.push("/login/credentials");
  };

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false} className="ion-padding">
        <IonGrid fixed className="login-grid">
          {/* Seção do Logo */}
          <IonRow className="ion-justify-content-center ion-align-items-start">
            <IonCol
              size="8"
              size-md="6"
              size-lg="4"
              className="ion-text-center"
            >
              <img
                src={tamojuntoLogo1}
                alt="Tamojunto Logo"
                className="logo-image"
              />
            </IonCol>
          </IonRow>

          {/* Seção da Imagem Principal */}
          <IonRow className="ion-justify-content-center ion-align-items-center ion-flex-grow-1">
            <IonCol
              size="12"
              size-md="8"
              size-lg="6"
              className="ion-text-center"
            >
              <img
                src={loginImage}
                alt="Login Illustration"
                className="login-image"
              />
            </IonCol>
          </IonRow>

          {/* Seção de Conteúdo e Botões */}
          <IonRow className="ion-justify-content-center ion-align-items-end">
            <IonCol
              size="12"
              size-md="8"
              size-lg="6"
              className="ion-text-center"
            >
              <div className="login-inner">
                <h2>Juntos, criamos momentos que valem mais que curtidas.</h2>
                <div className="button-row">
                  <DefaultButton onClick={handleGoToCredentials}>ENTRAR</DefaultButton>
                  <DefaultButton>CADASTRAR</DefaultButton>
                </div>
              </div>
            </IonCol>
          </IonRow>

          {/* Seção do Footer */}
          <IonRow className="ion-justify-content-center ion-align-items-end">
            <IonCol className="ion-text-center">
              <footer className="login-footer">© 2025, BIG BANG.</footer>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginTab;
