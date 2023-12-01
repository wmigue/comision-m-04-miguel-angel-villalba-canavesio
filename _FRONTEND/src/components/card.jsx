import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useEffect } from 'react'
import { Form, FloatingLabel, Container, Accordion, Row, Col, Toast } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { API_URL, PATH_AVATARS, PATH_POSTS, PATH_COMENTS } from '../../constantes'
import { formateoDates } from '../utils/dates'

import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import useOnChange from '../hooks/useOnChange'
import Fetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { sortMasRecienteAMasAntiguos } from '../utils/mongoDbUtils'




//el post
export default function CardComentario(children) {

    const { _id, comments, title, description, autor, imgURL, createdAt } = children
    console.log(comments)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const { dataForm, setear } = useOnChange({ description: "", _id_post: _id })
    const [token, setToken] = useState("")

    const navigate = useNavigate()

    // Ordenar los comments de mas recientes a mas antiguos
    const sortedComments = sortMasRecienteAMasAntiguos(comments)


    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(dataForm)
        await Fetch(API_URL + PATH_COMENTS + "/nuevo", 'POST', token, dataForm)
            .then((x) => {
                if (x.error) {
                    console.log(x.error)
                    navigate("/error?error=" + x.error)
                } else {
                    console.log(x.mensaje)
                    handleClose()
                    window.location.reload()
                }
            })
    }



    const handleEliminar = async (e, id_post) => {
        e.preventDefault()
        //console.log(dataForm)
        await Fetch(API_URL + PATH_POSTS + "/eliminar", 'POST', token, { id: id_post })
            .then((x) => {
                if (x.error) {
                    console.log(x.error)
                    navigate("/error?error=" + x.error)
                } else {
                    console.log(x.mensaje)
                    window.location.reload()
                }
            })
    }




    useEffect(() => {
        const t = localStorage.getItem("token")
        setToken(t)
    }, [])


    return (
        <div className="d-flex justify-content-center ">

            <Card className="text-center p-0 " style={{ width: '700px', marginBottom: '55px', minWidth: "300px" }}>
                <Card.Header>
                    <Image width={50} height={50} src={API_URL + PATH_AVATARS + "/" + autor.avatarURL} roundedCircle />
                    <p> <b>Autor: </b>{autor.email}
                        <br /><b>{formateoDates(createdAt)}</b>
                    </p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img src={imgURL}></img>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <hr /><br /><br />

                    <Container style={{ display: "flex", justifyContent: "center" }}>
                        <Accordion defaultActiveKey="0" flush >

                            {

                                sortedComments.map((x) => (
                                    <>
                                        <Toast className="d-inline-block m-1 w-75 " >
                                            <Toast.Header closeButton={false}>
                                                <strong className="me-auto">{x.email}</strong>
                                                <small>  {formateoDates(x.createdAt)}</small>
                                            </Toast.Header>
                                            <Toast.Body className={'text-dark'}>
                                                {x.description}
                                            </Toast.Body>
                                        </Toast>

                                    </>
                                ))

                            }

                        </Accordion>
                    </Container>




                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
                <Button variant="primary" onClick={handleShow}>
                    comentar
                </Button>
                <Button variant="danger mt-1" onClick={(e) => handleEliminar(e, _id)} >
                    eliminar
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
        </div >


    )
}



