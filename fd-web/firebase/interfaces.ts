import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore";

export interface BackendApi {
  firebaseApp: FirebaseApp;
  database: Firestore;
}
