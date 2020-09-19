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
import { star, starOutline } from "ionicons/icons";
import styles from "./_SucculentInfo.module.scss";

interface SucculentInfoPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SucculentInfo: React.FC<SucculentInfoPageProps> = ({ match }) => {
  const succulent = succulents.succulents.find(
    (succulent) => succulent.id.toString() === match.params.id
  );

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const starRating = localStorage.getItem("stars");
    if (starRating) {
      setRating(Number.parseInt(starRating));
    }
  }, []);

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
                src={succulent.img_src}
                alt={succulent.type}
              />
            </IonCol>
            <IonCol>
              <h1 className={styles.name}>{succulent.name}</h1>
              <span className={styles.nickname}>
                {/*`-${succulent.nickname}`*/}- the brave
              </span>
              <ul className={styles.rating}>
                {[...Array(5)].map((x, i) => (
                  <li>
                    <IonIcon
                      icon={i >= rating ? starOutline : star}
                      key={i}
                      onClick={() => {
                        setRating(i + 1);
                        localStorage.setItem("stars", (i + 1).toString());
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
