
'use client'

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Carrossel">
            <Carousel>
            {personagens.map(item => (
                <Carousel.Item>
                    <img src={item.imageUrl} width="100%"></img>
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>

        </Pagina>
    )
}

