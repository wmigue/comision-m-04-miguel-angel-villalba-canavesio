// import { Nav } from 'react-bootstrap'
import './navbar.css'
import { Col, Row, Button } from 'react-bootstrap'
import { useContexto } from '../../context/contexto'
import { useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { PATH_AVATARS, API_URL } from '../../../constantes'


export default function NavBarra() {

    const { tokens, avatar } = useContexto()
    const navigate = useNavigate()

    console.log(avatar)


    return (

        <div className={'headerizar'}>

            {
                tokens === "" ? (
                    <>
                        <button className='btn btn-primary text-decoration-none' onClick={() => navigate("/posts")}>POSTS</button>
                        <button className='btn btn-link text-decoration-none' onClick={() => navigate("/users/registro")}>REGISTRO</button>
                        <button className='btn btn-link text-decoration-none' onClick={() => navigate("/")}>LOGIN</button>
                    </>

                ) : (
                    <>
                        <Row >
                            <Col>
                                <button className='btn btn-primary text-decoration-none' onClick={() => navigate("/posts")}>POSTS</button>
                                <button className='btn btn-link text-decoration-none' onClick={() => navigate("/posts/nuevo")}>PUBLICAR</button>
                            </Col>
                            <Col className='m-1' md="auto">
                                <b >{avatar.email} </b> &nbsp;&nbsp;
                                <Image width={50} height={50} src={API_URL + PATH_AVATARS + "/" + avatar.img} roundedCircle />
                            </Col>
                        </Row>



                    </>
                )
            }
        </div >

    )


}