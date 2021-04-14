import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.3.2:3333", // Emulador
  // baseURL: "http://10.0.0.21:3333", Dispositivo remoto
});

export default api;
