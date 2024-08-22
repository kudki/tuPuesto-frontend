import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { code, qrCode } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent color="medium" fullscreen className='ion-padding'>
{/*         <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
          <img src='../../../assets/images/logo-filas.png' className='logo'/>
          <h1 className='titulo'>Consigue tu número</h1>
          <IonSearchbar placeholder='Buscar el local'></IonSearchbar>
          <IonButton expand='block'>
          Escanear QR
            <IonIcon slot='end' md={qrCode}></IonIcon>
          </IonButton>
          <IonGrid>
          <h4>Categorías</h4>
            <IonRow>
              <IonCol size-sm='3'>
                <IonAvatar className='servicesLogos'>
                  <IonImg src='../../../assets/images/chef.png'/>
                </IonAvatar>
                <IonLabel>Restorant</IonLabel>
              </IonCol>
              <IonCol size-sm='3'>
              <IonAvatar>
                  <IonImg src='../../../assets/images/bank.png'/>
                </IonAvatar>
                <IonLabel  >
                Bancos
                </IonLabel>
              </IonCol>
              <IonCol size-sm='3'>
              <IonAvatar>
                  <IonImg src='../../../assets/images/hospital.png'/>
                </IonAvatar>
                <IonLabel >
                  Medicina
                </IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
