import { Nav } from 'react-bootstrap'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import ContainerFluid from '../../layouts/layout'

export default function NavBarra() {

    return (

        <div className={'headerizar'}>
            <Nav defaultActiveKey="/home" as="ul" className='bg-light pb-6'>
                <Nav.Item as="li">
                    <Nav.Link href="/posts">POSTS</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/posts/nuevo">NUEVO</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    )


}