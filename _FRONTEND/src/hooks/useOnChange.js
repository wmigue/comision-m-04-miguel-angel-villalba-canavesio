
import { useState } from 'react'

export default function useOnChange(estructuraObj) {
    const [dataForm, setDataForm] = useState(estructuraObj)

    const setear = (e) => {
        console.log(e)
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
        console.log(dataForm)
    }

    return { dataForm, setear }
}



//recordar:
//setear atributo "name" a los campos html.

