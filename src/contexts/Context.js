// in use of context they are three steps :
// 1. cretae the context
// 2.provide it
// 3. using it

import { createContext, useContext } from "react";

// Wrapper component which  will provide context to other components
const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext)
}

export default AppContext