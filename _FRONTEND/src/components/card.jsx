import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useEffect } from 'react'
import { Form, FloatingLabel, Container, Accordion, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { API_URL, PATH_AVATARS, PATH_COMENTS } from '../../constantes'
import { formateoDates } from '../utils/dates'

import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import useOnChange from '../hooks/useOnChange'
import Fetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { sortMasRecienteAMasAntiguos } from '../utils/mongoDbUtils'





export default function CardComentario(children) {

    const { _id, comments, title, description, autor, imgURL, createdAt } = children
    console.log(comments)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const { dataForm, setear } = useOnChange({ description: "", _id_post: _id })
    const [token, setToken] = useState("")




    // Ordenar los comments de mas recientes a mas antiguos
    const sortedComments = sortMasRecienteAMasAntiguos(comments)


    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(dataForm)
        await Fetch(API_URL + PATH_COMENTS + "/nuevo", 'POST', token, dataForm)
            .then((x) => {
                if (x.error) {
                    console.log(x.error)
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
                    <p> <b>Autor: </b>{autor.email}</p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img src={imgURL}></img>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <hr /><br /><br />

                    <Container style={{ display: "flex", justifyContent: "center" }}>
                        <Accordion defaultActiveKey="0" flush>

                            {

                                sortedComments.map((x) => (
                                    <>


                                        <Accordion.Item eventKey="0" style={{ width: "600px" }}>
                                            <Accordion.Header>

                                                <Row className='w-100'>
                                                    <Col sm={6}>
                                                        {x.email}
                                                    </Col>
                                                    <Col sm={6} style={{ width: "100%" }}>
                                                        <b style={{ fontSize: "11px" }} >
                                                            {formateoDates(x.createdAt)}
                                                        </b>
                                                    </Col>
                                                </Row>

                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {x.description}

                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </>
                                ))

                            }

                        </Accordion>
                    </Container>




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
        </div >


    )
}



