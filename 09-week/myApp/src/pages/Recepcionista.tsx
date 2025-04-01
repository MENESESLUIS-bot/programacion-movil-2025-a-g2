import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";

const Recepcionista: React.FC = () => {
  const [form, setForm] = useState({ nombre: "", apellido: "", edad: "", correo: "",Horario_Laboral:"", Extensión_telefónica:"", });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestión de Personal Médico
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Registro de Recepcionista</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput name="nombre" value={form.nombre} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput name="apellido" value={form.apellido} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Edad</IonLabel>
            <IonInput name="edad" type="number" value={form.edad} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Correo</IonLabel>
            <IonInput name="correo" type="email" value={form.correo} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Horario_Laboral</IonLabel>
            <IonInput name="Horario_Laboral" type="number" value={form.Horario_Laboral} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Extensión_telefónica</IonLabel>
            <IonInput name="Extensión_telefónica" type="number" value={form.Extensión_telefónica} onIonChange={handleChange} />
          </IonItem>
          <div className="ion-padding">
            <IonButton expand="full" color="primary">Agregar</IonButton>
            <IonButton expand="full" color="secondary">Modificar</IonButton>
            <IonButton expand="full" color="danger">Eliminar</IonButton>
            <IonButton expand="full" color="tertiary">Consultar</IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Recepcionista;
