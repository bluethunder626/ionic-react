// .storybook/preview.js
import React, { useState } from 'react';
import { addDecorator } from "@storybook/react";
import { 
   IonApp, IonContent, IonPage, IonList, IonButton, IonSlides
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import "../src/theme/variables.css"

// const IonWrapper = ({ children }) => {
//   return (
//     <IonApp>
//       <IonPage>
//         <IonContent>
//           {children}
//         </IonContent>
//       </IonPage>
//     </IonApp>
//   );
// };

// addDecorator((storyFn) => <IonWrapper>{storyFn()}</IonWrapper>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <IonApp>
      <IonPage>
        <IonContent>
          <Story />
        </IonContent>
      </IonPage>
    </IonApp>
  ),
];
