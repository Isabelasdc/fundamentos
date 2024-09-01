
'use client'

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

export default function Page() {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Tabela">
           <Table striped bordered hover>
           <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Foto</th>
        </tr>
      </thead>
           {personagens.map(item => (
      <tbody>
        <tr>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <img src={item.imageUrl}></img>
        </tr>
      </tbody>
           ))}
    </Table>

        </Pagina>
    )
}

