
import Fetch from '../src/hooks/useFetch'
import { API_URL, PATH_POSTS } from '../constantes'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import CardComentario from '../src/components/card'


export default function Posts() {
    const [data, setData] = useState([])
    const navigate = useNavigate()


    const getAllPosts = () => {
        Fetch(API_URL + PATH_POSTS + "/todos", 'GET', "")
            .then((x) => {
                if (x.error) {
                    navigate("/error?error=" + x.error + "&ira=recargar&iraurl=posts")
                } else {
                    setData(x.data)
                }
            })
        console.log(data)
    }

    useEffect(() => {
        getAllPosts()
    }, [])



    return (
        <div className='mt-5 pt-5'>
            {
                data.map(x => (
                    <CardComentario
                        getAllPosts={getAllPosts}
                        key={x._id}
                        _id={x._id}
                        title={x.title}
                        autor={x.autor} // estas populado, trae todos sus datos 
                        description={x.description}
                        imgURL={x.imgURL}
                        createdAt={x.createdAt}
                        comments={x.comments}
                    />
                ))
            }
        </div>
    )



}
