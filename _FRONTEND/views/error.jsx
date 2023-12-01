
import { useLocation } from 'react-router-dom'


function Error() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const error = searchParams.get('error')

    return (
        <div>
            <b>ERROR:</b> {error} <br /> <br />
            <a className='btn btn-primary' href='/'>ir a login</a>
        </div>
    )
}

export default Error