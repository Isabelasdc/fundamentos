'use client'

import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo="Objetos">

    <main>
      <Button variant="danger">Primary</Button>{' '}

      <Cabecalho titulo="Página inicial" subtitulo="Orion Teles" />

      <Link  href="/fundamentos">Página Fundamentos</Link>



    </main>
    </Pagina>
  );
}
