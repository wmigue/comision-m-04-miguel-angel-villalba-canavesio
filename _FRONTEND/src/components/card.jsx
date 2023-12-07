import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { Form, FloatingLabel, Container, Accordion, Toast } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { API_URL, PATH_AVATARS, PATH_POSTS, PATH_COMENTS } from '../../constantes'
import { formateoDates } from '../utils/dates'

import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import useOnChange from '../hooks/useOnChange'
import Fetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { sortMasRecienteAMasAntiguos } from '../utils/mongoDbUtils'
import { scrollToTop } from '../utils/windows-utils'
import { useContexto } from '../context/contexto'




//el post
export default function CardComentario(children) {

    const { _id, comments, title, description, autor, imgURL, createdAt, getAllPosts } = children


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const { dataForm, setear } = useOnChange({ description: "", _id_post: _id })
    const { tokens, avatar } = useContexto()
    const navigate = useNavigate()

    // Ordenar los comments de mas recientes a mas antiguos
    const sortedComments = sortMasRecienteAMasAntiguos(comments)


    const handleSubmit = async (e) => {
        e.preventDefault()
        await Fetch(API_URL + PATH_COMENTS + "/nuevo", 'POST', tokens, dataForm)
            .then((x) => {
                if (x.error) {

                    navigate("/error?error=" + x.error + "&ira=ir a login&iraurl=")
                } else {

                    handleClose()
                    navigate("/posts")
                    getAllPosts()


                }
            })
    }



    const handleEliminar = async (e, id_post) => {
        e.preventDefault()
        //(dataForm)
        await Fetch(API_URL + PATH_POSTS + "/eliminar", 'POST', tokens, { id: id_post })
            .then((x) => {
                if (x.error) {
                    (x.error)
                    navigate("/error?error=" + x.error + "&ira=ir a posts&iraurl=posts")
                } else {
                    (x.mensaje)
                    getAllPosts()
                    scrollToTop()
                }
            })
    }





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

                    <Container style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>


                        {

                            sortedComments.map((x) => (
                                <>
                                    <div style={{ marginBottom: "30px" }}>
                                        <div
                                            style={{ backgroundColor: "grey", borderRadius: "10px", color: "white" }}>
                                            <Col className=''>
                                                {x.description}<br />
                                            </Col>
                                        </div>
                                        <span >
                                            <b style={{ fontSize: "10px" }}>
                                                {x.email}&nbsp;
                                            </b>
                                            <small style={{ fontSize: "10px" }}>
                                                {formateoDates(x.createdAt)}
                                            </small>
                                        </span>
                                    </div>
                                </>



                            ))

                        }


                    </Container>




                </Card.Body>
                <Card.Footer className="text-muted">
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            <Button variant="primary" onClick={handleShow}>
                                comentar
                            </Button>
                        </Col>

                        {
                            autor.email === avatar.email ? (
                                <Col xs lg="2">

                                    <Button variant="danger" onClick={(e) => handleEliminar(e, _id)} >
                                        eliminar
                                    </Button>
                                </Col>
                            ) : null
                        }


                    </Row>
                </Card.Footer>





                <Modal style={{ zIndex: 2000000000 }} show={show} onHide={handleClose}>
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



