import { createContext, useContext, useEffect, useState } from "react";

// Context con state

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    console.log('use effect')
  }, [])
  
  
  const login = (email, name = "Agustin") => {
    setUser({
      name,
      email,
    });
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
