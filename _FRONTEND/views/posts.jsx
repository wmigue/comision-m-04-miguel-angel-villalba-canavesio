
import Fetch from '../src/hooks/useFetch'
import { API_URL, PATH_POSTS } from '../constantes'
import { useEffect, useState } from "react"


export default function Posts() {

    const [data, setData] = useState("")
    // const { token } = useContexto()
    // const verifyJWT = async () => {
    //     console.log(token)
    //     return await Fetch(API_URL + PATH_POSTS, 'POST', token)

    // }

    useEffect(() => {
        const token = localStorage.getItem("token")
        setData(token)
    })


    {
        if (data) return (<div>todos los Posts</div>)
        return (<div>Primero legueate.</div>)
    }


}
