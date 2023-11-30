
import { Button, Form } from 'react-bootstrap'
import Fetch from '../src/hooks/useFetch'
import useOnChange from '../src/hooks/useOnChange'
import { API_URL, PATH_USERS } from '../constantes'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



export default function Registro() {
    const navigate = useNavigate()


    const { dataForm, setear } = useOnChange({ email: '', password: '', avatarURL: '' })

    const fd = new FormData()
    fd.append('email', dataForm.email)
    fd.append('password', dataForm.password)

    const avatarOnChange = (e) => {
        console.log(e.target.files[0])
        fd.append('avatarURL', e.target.files[0])
        console.log(fd)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Fetch(API_URL + PATH_USERS + '/create', 'POST', "", dataForm, fd)
            .then((x) => {
                if (x.data) {
                    alert(x.mensaje)
                    navigate('/')
                }
            })
    }



    useEffect(() => {
        localStorage.removeItem("token")
    }, [])


    return (

        <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <h3 className='mb-3'>{"Registro "}</h3>
            <Form.Control required size="md" type="email" className='m-1' placeholder="nuevo email" name="email" onChange={(e) => setear(e)} />

            <Form.Control required size="md" type="password" className='m-1' placeholder="nuevo password" name="password" onChange={(e) => setear(e)} />

            <br />
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto de avatar</Form.Label>
                <Form.Control required type="file" onChange={(e) => avatarOnChange(e)} />
            </Form.Group>
            <br />
            <Button variant="primary" type='submit'>
                registrarse
            </Button>
        </Form>

    )
}

