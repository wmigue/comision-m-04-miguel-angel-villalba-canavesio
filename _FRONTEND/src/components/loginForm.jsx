
import { Button, Form } from 'react-bootstrap'
import Fetch from '../hooks/useFetch'
import useOnChange from '../hooks/useOnChange'
import { API_URL, PATH_USERS, PATH_USERS_LOGIN } from '../../constantes'
import { useNavigate } from 'react-router-dom'
import { useContexto } from '../context/contexto'

export default function LoginForm(props) {
    const navigate = useNavigate()
    const { nombreFormulario } = props
    const { dataForm, setear } = useOnChange({ email: '', password: '' })
    const { setToken } = useContexto()

    const handleSubmit = (e) => {
        e.preventDefault()
        Fetch(API_URL + PATH_USERS + PATH_USERS_LOGIN, 'POST', "", dataForm)
            .then((x) => {
                if (x.token) {
                    // console.log(x.token)
                    setToken(x.token)
                    localStorage.setItem("token", x.token)
                    navigate('/posts')
                }
            })
    }

    console.log(dataForm)

    return (

        <Form onSubmit={handleSubmit}>
            <h3 className='mb-3'>{nombreFormulario}</h3>
            <Form.Control size="md" type="text" className='m-1' placeholder="email" name="email" onChange={(e) => setear(e)} />

            <Form.Control size="md" type="text" className='m-1' placeholder="password" name="password" onChange={(e) => setear(e)} />

            <Button variant="primary" type='submit'>
                iniciar sesión
            </Button>
        </Form>

    )
}

