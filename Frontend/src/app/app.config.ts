import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDK7VZ62V-TiGK3uBcsBGX3mNkZxxpfnTE',
//   authDomain: 'e-commerce-e1885.firebaseapp.com',
//   projectId: 'e-commerce-e1885',
//   storageBucket: 'e-commerce-e1885.appspot.com',
//   messagingSenderId: '611826965683',
//   appId: '1:611826965683:web:7242ce6cac825ccf5ea4c6',
// };

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes), provideClientHydration()]
};
