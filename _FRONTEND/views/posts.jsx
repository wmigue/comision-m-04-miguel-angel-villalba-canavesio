
import Fetch from '../src/hooks/useFetch'
import { API_URL, PATH_POSTS } from '../constantes'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import CardComentario from '../src/components/card'


export default function Posts() {
    const [data, setData] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        Fetch(API_URL + PATH_POSTS + "/todos", 'GET', "")
            .then((x) => {
                if (x.error) {
                    navigate("/error?error=" + x.error)
                } else {
                    setData(x.data)
                }
            })
        console.log(data)
    }, [])



    return (
        <>
            {
                data.map(x => (
                    <CardComentario
                        key={x._id}
                        title={x.title}
                        autor={x.autor} // estas populado, trae todos sus datos 
                        description={x.description}
                        imgURL={x.imgURL}
                        createdAt={x.createdAt}
                    />
                ))
            }
        </>
    )



}
