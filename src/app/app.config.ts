import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes), 
              provideClientHydration(), 
              provideFirebaseApp(() => initializeApp({"projectId":"red-cresent-web-site","appId":"1:416474950582:web:a014d5f96de5a710876f17","storageBucket":"red-cresent-web-site.appspot.com","apiKey":"AIzaSyDNu81uJsXYQuIIaBrC0hnQp_JF32Voox8","authDomain":"red-cresent-web-site.firebaseapp.com","messagingSenderId":"416474950582","measurementId":"G-5B64VJYEH0"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideAnimationsAsync(),
              provideHttpClient(), provideAnimationsAsync()
            ]
              
            };
