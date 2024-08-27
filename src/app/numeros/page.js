
'use client'

import Pagina from "@/app/components/Pagina"
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Page() {

    const [contar, setContar] = useState(0)

    function soma(){
        setContar  (prevContar => prevContar + 1 ) 
    }

    function subtrair(){
        setContar (prevContar => prevContar - 1 ) 
    }
    

    return (
        <Pagina titulo="Números">
        <Button onClick={subtrair}> - </Button>
        <h1>{contar}</h1>
        <Button onClick={soma}> + </Button>

        </Pagina>
    )
}

