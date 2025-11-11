import { useState, ChangeEvent } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./loginTab_2.css";
import DefaultButton from "../components/Buttons/DefaultButton";
import tamojuntoLogo2 from "../assets/images/loginTab/tamojuntologo_2.png";
import backIcon from "../assets/images/loginTab/backButton.svg";

type CredentialField = "email" | "password";

const LoginTabCredentials: React.FC = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange =
    (field: CredentialField) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value ?? "";
      setCredentials((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = () => {
    setErrorMessage("");

    if (!credentials.email.trim() || !credentials.password.trim()) {
      setErrorMessage("Informe seu e-mail e senha para continuar.");
      return;
    }

    history.replace("/tabs/homebarTab");
  };

  const handleForgotPassword = () => {
    history.push("/login");
  };

  const handleSocialLogin = (provider: "google" | "apple" | "instagram") => {
    void provider;
    history.replace("/tabs/homebarTab");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-credentials-content">
        <div className="login-credentials-logo-container">
        <img src={tamojuntoLogo2} alt="Logo" className="login-credentials-logo" />
        </div>
        
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start"
            className="ionic-back-button">
              <IonBackButton defaultHref="/login"
              icon={backIcon}/>
            </IonButtons>
            <IonTitle className="login-credentials-header">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="login-credentials-wrapper">
          <IonList lines="full" className="login-credentials-form">
            <IonItem>
              <IonLabel position="stacked" className="box-label">
                Email ou nome de usuário
              </IonLabel>
              <input
                className="native-input input-label"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={credentials.email}
                onChange={handleInputChange("email")}
                placeholder="Digite seu email ou nome de usuário"
                aria-label="email ou nome de usuario"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" className="box-label">
                Senha
              </IonLabel>
              <input
                className="native-input"
                type="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleInputChange("password")}
                placeholder="Digite sua senha"
                aria-label="senha"
              />
            </IonItem>
          </IonList>

          {errorMessage && (
            <IonText color="danger" className="login-credentials-error">
              {errorMessage}
            </IonText>
          )}

          <IonButton
            fill="clear"
            className="login-credentials-forgot"
            onClick={handleForgotPassword}
          >
            Esqueci minha senha
          </IonButton>

          <div className="default-button">
            <DefaultButton label="ENTRAR" onClick={handleSubmit} />
          </div>

          <div className="login-credentials-divider">
            <span />
            <p>ENTRE TAMBÉM COM</p>
            <span />
          </div>

          <div className="login-credentials-social">
            <IonButton
              expand="block"
              fill="outline"
              onClick={() => handleSocialLogin("google")}
            >
              Entrar com Google
            </IonButton>
            <IonButton
              expand="block"
              fill="outline"
              onClick={() => handleSocialLogin("apple")}
            >
              Entrar com Apple
            </IonButton>
            <IonButton
              expand="block"
              fill="outline"
              onClick={() => handleSocialLogin("instagram")}
            >
              Entrar com Instagram
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginTabCredentials;
