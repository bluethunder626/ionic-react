import React from "react";
import { IonButton, IonContent, IonPage } from "@ionic/react";

const Button: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton size="large">Large</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Button;
