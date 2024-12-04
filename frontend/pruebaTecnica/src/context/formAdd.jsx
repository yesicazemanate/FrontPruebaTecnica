import React, { createContext, useState } from 'react';

export const contextAdd = createContext();

export const ProviderContext = ({ children }) => {
  const [state, setState] = useState(true); 

  return (
    <contextAdd.Provider value={{ state, setState }}>
      {children}
    </contextAdd.Provider>
  );
}