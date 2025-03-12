import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// Service Worker Registrierung für PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(
      (registration) => {
        console.log("Service Worker registriert mit Scope:", registration.scope);
      },
      (error) => {
        console.log("Service Worker Registrierung fehlgeschlagen:", error);
      }
    );
  });
}
