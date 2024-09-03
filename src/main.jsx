import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
//import { AuthProvider } from "./context/Authcontext";

createRoot(document.getElementById('root')).render(
  //<AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>
  //</AuthProvider>

);