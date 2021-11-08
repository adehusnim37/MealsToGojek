import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxZVSdtpIsTGKaANbE5k6lq4bGoiX5STA",
  authDomain: "mealstogo-f5d61.firebaseapp.com",
  projectId: "mealstogo-f5d61",
  storageBucket: "mealstogo-f5d61.appspot.com",
  messagingSenderId: "604961062692",
  appId: "1:604961062692:web:bde45eb76c5cec94f97db1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
