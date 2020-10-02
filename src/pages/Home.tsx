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
          <IonTitle color="tertiary" className={styles.title}>
            Christina's Succulent Collection
          </IonTitle>
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
                succulent={Object.assign(new Succulent(), succulent)}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
