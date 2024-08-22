import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonList,
  IonItem,
} from "@ionic/react";
import "../navMenu/NavMenu.css";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";

const NavMenu = () => {
  return (
    <>
    
    <IonMenu contentId="main-content">
 
            <IonList>
                <IonItem>
                    Iniciar sesión
                </IonItem>
                <IonItem>
                    Iniciar sesión
                </IonItem>
            </IonList>
        
      </IonMenu>
    <IonHeader>
    <img src="../../../assets/images/logo.png" alt="Tu turno" className="logoBrand"/>
    <IonButtons id="main-content" slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
    </IonHeader>

    </>
  );
};

export default NavMenu;
