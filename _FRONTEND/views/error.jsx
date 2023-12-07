
import { useLocation, useNavigate } from 'react-router-dom'


function Error() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const error = searchParams.get('error')
    const ira = searchParams.get('ira')
    const iraurl = searchParams.get('iraurl')

    const navigate = useNavigate()

    return (
        <div>
            <b>ERROR:</b> {error} <br /> <br />
            <button className='btn btn-primary'
                onClick={() => navigate("/" + iraurl)}>
                {ira ? ira : "aceptar"}
            </button>
        </div>
    )
}

export default Error