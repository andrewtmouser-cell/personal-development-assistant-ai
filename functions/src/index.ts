
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
import * as serviceAccount from "./personal-development-ass-6e364-9d18a0128b1f.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccountInfo)
});


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
