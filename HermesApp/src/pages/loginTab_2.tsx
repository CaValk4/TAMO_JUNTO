import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import SearchBox_Style_1 from '../components/SearchBoxes/SearchBox_Style_1';

// Importe os ícones que você usará
import { personOutline, mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

const ExamplePage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exemplo de Componente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {/* Exemplo 1: Texto Geral (Nome) */}
          <SearchBox_Style_1
            label="Nome"
            value={name}
            onChange={(e) => setName(e.detail.value!)}
            iconStart={personOutline}
            clearInput={true}
          />

          {/* Exemplo 2: Email */}
          <SearchBox_Style_1
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.detail.value!)}
            iconStart={mailOutline}
            placeholder="seuemail@dominio.com"
          />

          {/* Exemplo 3: Senha (com toggle de visibilidade) */}
          <SearchBox_Style_1
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.detail.value!)}
            iconStart={lockClosedOutline}
            iconEnd={showPassword ? eyeOffOutline : eyeOutline}
            onIconEndClick={togglePasswordVisibility}
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ExamplePage;