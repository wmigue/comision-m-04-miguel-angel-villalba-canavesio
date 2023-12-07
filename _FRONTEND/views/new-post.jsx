
import { Button, Form, FloatingLabel, InputGroup } from 'react-bootstrap'
import Fetch from '../src/hooks/useFetch'
import useOnChange from '../src/hooks/useOnChange'
import { API_URL, PATH_POSTS } from '../constantes'
import { useNavigate } from 'react-router-dom'
import { useContexto } from '../src/context/contexto'


function NewPost() {

    const { dataForm, setear } = useOnChange({ title: "", description: "", imgURL: "" })
    const { tokens } = useContexto()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await Fetch(API_URL + PATH_POSTS + "/nuevo", 'POST', tokens, dataForm)
            .then((x) => {
                if (x.error) {
                    navigate("/error?error=" + x.error + "&ira=ir a login&iraurl=")
                } else {
                    navigate("/posts")
                }
            })
    }




    return (
        <Form onSubmit={handleSubmit}>
            <h3 className='mb-3'>{"Nuevo post"}</h3>

            <FloatingLabel controlId="floatingTextarea2" label="titulo" className='mb-3'>
                <Form.Control
                    required
                    onChange={(e) => setear(e)}
                    name="title"
                    as="input"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ height: '10px' }}
                />
            </FloatingLabel>


            <FloatingLabel controlId="floatingTextarea2" label="escribe el post" className='mb-3'>
                <Form.Control
                    required
                    onChange={(e) => setear(e)}
                    name="description"
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                />
            </FloatingLabel>

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">URL imagen</InputGroup.Text>
                <Form.Control
                    onChange={(e) => setear(e)}
                    name='imgURL'
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>

            <Button variant="primary" type='submit'>
                enviar
            </Button>
        </Form>

    )


}

export default NewPost