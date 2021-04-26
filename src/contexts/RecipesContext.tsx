import React, { createContext } from "react";

interface RecipesContextData {

}

interface RecipesProviderProps{
    children: React.ReactNode
}

export const RecipesContext = createContext({}as RecipesContextData);

export default function RecipesProvider({children}: RecipesProviderProps){
    return (
        <RecipesContext.Provider value={{}}>
            {children}
        </RecipesContext.Provider>
    )
}