import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useEffect } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { API_URL, PATH_AVATARS, PATH_COMENTS } from '../../constantes'
import { formateoDates } from '../utils/dates'

import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import useOnChange from '../hooks/useOnChange'
import Fetch from '../hooks/useFetch'

export default function CardComentario(children) {

    const { _id, comments, title, description, autor, imgURL, createdAt } = children

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const { dataForm, setear } = useOnChange({ description: "", _id_post: _id })
    const [token, setToken] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(dataForm)
        await Fetch(API_URL + PATH_COMENTS + "/nuevo", 'POST', token, dataForm)
            .then((x) => {
                if (x.error) {
                    console.log(x.error)
                } else {
                    console.log(x.mensaje)
                }
            })
    }


    useEffect(() => {
        const t = localStorage.getItem("token")
        setToken(t)
    }, [])


    return (
        <div className="d-flex justify-content-center ">

            <Card className="text-center p-0" style={{ width: '700px', marginBottom: '55px', minWidth: "300px" }}>
                <Card.Header>
                    <Image width={50} height={50} src={API_URL + PATH_AVATARS + "/" + autor.avatarURL} roundedCircle />
                    <p> {autor.email}</p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img src={imgURL}></img>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>comentarios: </h3>
                    {comments.map(x => <div key={x}>{x}</div>)}
                </Card.Body>
                <Card.Footer className="text-muted">{formateoDates(createdAt)}</Card.Footer>
                <Button variant="primary" onClick={handleShow}>
                    comentar
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
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
                            <Button variant="primary" type='submit'>
                                guardar
                            </Button>
                        </Modal.Body>

                        <Modal.Footer>

                        </Modal.Footer>
                    </Form>
                </Modal>

            </Card>
            <br />
        </div>


    )
}



