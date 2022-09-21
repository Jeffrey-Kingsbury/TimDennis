import { createContext, useState } from "react";
export const userContext = createContext();


const UserContext = ({ children }) => {
    const [lang, setLang] = useState("FR");

    return (
        <userContext.Provider value={{ lang, setLang }}>
            {children}
        </userContext.Provider>)

}

export default UserContext;