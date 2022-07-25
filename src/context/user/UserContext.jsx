import { createContext, useContext } from "react";

// Creamos el context
export const UserContext = createContext();

// Hook para poder usarlo sin doble importacion
export const useUserContext = () => useContext(UserContext);
