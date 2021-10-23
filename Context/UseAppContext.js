import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [lang, setLang] = useState("ESP");

    const displayIngles = (value) =>{
        setLang("ENG");
	}
    const displayEspañol = (value) =>{
        setLang("ESP");
	}

      
    return (
        <AppContext.Provider value={{
				lang,
                displayIngles,
                displayEspañol
            }}>{children}</AppContext.Provider>)
}

export default useAppContext