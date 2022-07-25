import { useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import { reducer } from "./userReducer";

const initialState = {
  user: null,
  isLogged: true,
};


// Proveedor de la informacion para toda nuestra app (main.jsx)
const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);


  const login = (email, name) => {
    dispatch({ type: "login", payload: { email, name } });
  };

  const logout = () => dispatch({type: 'logout'});

  return (
    <UserContext.Provider value={{ ...state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
