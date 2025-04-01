import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";

const Medico: React.FC = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    correo: "",
    Especialidad: "",
    Numerodelicenciamedica:"",
  });

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
            <IonCardTitle>Registro de Medico</IonCardTitle>
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
            <IonInput name="edad" value={form.edad} onIonChange={handleChange} type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Correo</IonLabel>
            <IonInput name="correo" value={form.correo} onIonChange={handleChange} type="email" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Especialidad</IonLabel>
            <IonInput name="especialidad" value={form.Especialidad} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Numerodelicenciamedica</IonLabel>
            <IonInput name="numerodelicenciamedica" value={form.Numerodelicenciamedica} onIonChange={handleChange} />
          </IonItem>
          <div className="ion-padding">
            <IonButton color="primary">Agregar</IonButton>
            <IonButton color="secondary">Modificar</IonButton>
            <IonButton color="danger">Eliminar</IonButton>
            <IonButton color="tertiary">Consultar</IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Medico;
