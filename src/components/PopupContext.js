import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export function usePopup() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
}
