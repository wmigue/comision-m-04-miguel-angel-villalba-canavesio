
import { useState } from 'react'

export default function useOnChange(estructuraObj) {
    const [dataForm, setDataForm] = useState(estructuraObj)

    const setear = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    return { dataForm, setear }
}



//recordar:
//setear atributo "name" a los campos html.

