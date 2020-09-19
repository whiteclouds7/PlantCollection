import {
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import styles from "./Home.module.scss";
import { SucculentCard } from "../components/SucculentCard/SucculentCard";
import succulents from "../data/succulents.json";
import { Succulent } from "../class/Succulent";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Christina's Succulent Collection</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          {succulents.succulents.map((succulent) => (
            <IonCol size="6" size-lg="4" size-xs="12">
              <SucculentCard
                succulent={
                  new Succulent(
                    succulent.id,
                    succulent.name,
                    succulent.type,
                    succulent.img_src,
                    succulent.short_description,
                    succulent.description
                  )
                }
              />
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
