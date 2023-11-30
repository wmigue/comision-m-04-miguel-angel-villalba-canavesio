import { createContext, useContext, useState } from "react"

export const MiContexto = createContext()

export const ContextoProvider = ({ children }) => {

    const [token, setToken] = useState("")

    return <MiContexto.Provider value={{ token, setToken }}>
        {children}
    </MiContexto.Provider>
}

export const useContexto = () => {
    const context = useContext(MiContexto)
    if (context === undefined) {
        throw new Error('Contexto must be used within a Provider')
    }
    return context
}