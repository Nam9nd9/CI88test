import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const Approvider = ({children})=>{
    const [complate,setComplate] = useState([])

    const value1 = {
        complate,setComplate
    }
    return <AppContext.Provider value={value1}>{children}</AppContext.Provider>;

}

export const Appdata = ()=>{
    return useContext(AppContext);
}