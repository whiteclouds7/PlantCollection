import React, { FC } from "react";
import {
  IonFabButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonFab,
} from "@ionic/react";
import "./SucculentCard.css";
import { addOutline } from "ionicons/icons";
import { ISucculentProp } from "../../class/ISucculent";

export const SucculentCard: FC<ISucculentProp> = ({ succulent }) => {
  return (
    <IonCard>
      <img
        className="succulentImage"
        src={succulent.imgSrc}
        alt={succulent.type}
      />
      <IonCardHeader>
        <IonCardSubtitle>{succulent.type}</IonCardSubtitle>
        <IonCardTitle>{succulent.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {succulent.shortDescription}
        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton
            href={`/succulent/${succulent.id}`}
            className="moreButton"
          >
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonCardContent>
    </IonCard>
  );
};
