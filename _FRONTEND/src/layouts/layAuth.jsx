import { useContexto } from "../context/contexto"
import LoginForm from "../components/loginForm"
import NavBarra from "../components/navbar/navbar"
import { useNavigate } from "react-router-dom"

function LayAuth({ children }) {

    const { tokens } = useContexto()
    const navigate = useNavigate()

    return (
        <div>
            {
                children
            }
        </div>
    )
}

export default LayAuth