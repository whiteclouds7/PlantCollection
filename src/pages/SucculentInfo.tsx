import React, { useEffect, useState } from "react";
import {
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import succulents from "../data/succulents.json";
import { star, starOutline, waterOutline, sunnyOutline } from "ionicons/icons";
import styles from "./_SucculentInfo.module.scss";
import { Succulent } from "../class/Succulent";

interface SucculentInfoPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SucculentInfo: React.FC<SucculentInfoPageProps> = ({ match }) => {
  const succulent: Succulent = Object.assign(
    new Succulent(),
    succulents.succulents.find(
      (succulent) => succulent.id.toString() === match.params.id
    )
  );

  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (succulent) {
      const starRating = localStorage.getItem(`stars-${succulent.id}`);
      if (starRating) {
        setRating(Number.parseInt(starRating));
      }
    }
  }, [succulent]);

  if (succulent) {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{succulent.type}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonRow>
            <IonCol size-lg="4" size-xs="12">
              <img
                className={styles.imgSucculent}
                src={succulent.imgSrc}
                alt={succulent.type}
              />
            </IonCol>
            <IonCol>
              <h1 className={styles.name}>{succulent.name}</h1>
              <span className={styles.nickname}>
                {/*`-${succulent.nickname}`*/}- the brave
              </span>
              <ul className={styles.water}>
                {[...Array(succulent.water)].map(() => (
                  <li>
                    <IonIcon icon={waterOutline} />
                  </li>
                ))}
              </ul>
              <ul className={styles.sun}>
                {[...Array(succulent.sun)].map(() => (
                  <li>
                    <IonIcon icon={sunnyOutline} />
                  </li>
                ))}
              </ul>
              <p>{succulent.description}</p>
              <ul className={styles.rating}>
                {[...Array(5)].map((x, i) => (
                  <li>
                    <IonIcon
                      icon={i >= rating ? starOutline : star}
                      key={i}
                      onClick={() => {
                        setRating(i + 1);
                        localStorage.setItem(
                          `stars-${succulent.id}`,
                          (i + 1).toString()
                        );
                      }}
                    />
                  </li>
                ))}
              </ul>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
  throw new Error("succulent dosen't exist!");
};

export default SucculentInfo;
