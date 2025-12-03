import React, { useContext } from "react";
import { CartContext } from "./Context/Context";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";



// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNa-v5v-z0lm3_shDuoa9PWXhKvuoKHaI",
  authDomain: "rebotador-app.firebaseapp.com",
  projectId: "rebotador-app",
  storageBucket: "rebotador-app.firebasestorage.app",
  messagingSenderId: "638613196754",
  appId: "1:638613196754:web:0d689f6e464243e2df020b",
  measurementId: "G-5HS6N84ZVZ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// =======================
// FUNCIONES DE NOTIFICACIÓN
// =======================


// =======================
// FUNCIÓN LOGIN
// =======================

export const login = async (email, password, setUsuarioOn) => {
  try {
  
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res && res.user) {
      setUsuarioOn(true);
      console.log("✅ Sesión iniciada");
       let ms = auth.currentUser
    console.log({ms})
    } else {
      console.log("❌ No se pudo iniciar sesión");
    }
  } catch (error) {
    console.log("❌ Error en login:", error);
    showMessage({
      message: 'Error en el inicio de sesión',
      description: 'Revisa tu correo y contraseña',
      type: 'danger',
    });
  }
   
};

// =======================
// FUNCIÓN CREATE (registro)
// =======================

export const create = async (email, password, setUsuarioOn) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res && res.user) {
      setUsuarioOn(true);
      console.log("✅ Usuario creado");
    }
  } catch (error) {
    console.log("❌ Error en registro:", error);
  }
};
