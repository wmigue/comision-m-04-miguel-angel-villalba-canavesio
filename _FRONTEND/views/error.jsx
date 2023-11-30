
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Error() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const error = searchParams.get('error')
    const navigate = useNavigate()
    return (
        <div>
            <b>ERROR:</b> noss autenticado : {error} <br /> <br />
            <button className='btn btn-primary' onClick={navigate("/")}>ir a login</button>
        </div>
    )
}

export default Error