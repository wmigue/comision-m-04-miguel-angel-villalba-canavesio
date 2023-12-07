import { createContext, useContext, useState } from "react"

export const MiContexto = createContext()



export const ContextoProvider = ({ children }) => {

    const [tokens, setTokens] = useState("")
    const [avatar, setAvatar] = useState({ img: "", email: "" })

    return <MiContexto.Provider value={{ tokens, setTokens, avatar, setAvatar }}>
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