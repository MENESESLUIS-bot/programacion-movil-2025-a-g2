import React, { useState } from "react";
import { IonPage, 
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
         IonButton 
        } from "@ionic/react";

const Paciente: React.FC = () => {
  const [form, setForm] = useState({ 
    nombre: "", 
    apellido: "", 
    edad: "", 
    correo: "",
    Numero_de_historia_clinica:"",
    Tipo_de_afiliacion:"" });

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
            <IonCardTitle>Registro de Paciente</IonCardTitle>
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
            <IonLabel position="floating">Numero_de_historia_clinica</IonLabel>
            <IonInput name="Numero_de_historia_clinica" type="number" value={form.Numero_de_historia_clinica} onIonChange={handleChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Tipo_de_afiliacion(EPS, particular)</IonLabel>
            <IonInput name="Tipo_de_afiliacion(EPS, particular)" value={form.Tipo_de_afiliacion} onIonChange={handleChange} />
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

export default Paciente;
