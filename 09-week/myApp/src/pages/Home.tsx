import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonButton, IonCardContent } from "@ionic/react";

const Formulario: React.FC = () => {
  const [form, setForm] = useState({ nombre: "", apellido: "", edad: "", correo: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestión de Personal Médico</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Home</IonCardTitle>
          </IonCardHeader>
  
          <IonCardContent>
            <div className="ion-padding">
              <IonButton expand="full" color="primary" aria-label="ir a Medico">ir a Medico</IonButton>
              <IonButton expand="full" color="secondary" aria-label="ir a Paciente">ir a Paciente</IonButton>
              <IonButton expand="full" color="danger" aria-label="ir a Recepcionista">ir a Recepcionista</IonButton>
              <IonButton expand="full" color="tertiary" aria-label="ir a Enfermero">ir a Enfermero</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
 }

export default Formulario;
