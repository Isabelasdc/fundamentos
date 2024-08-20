
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="danger">Primary</Button>{' '}

      <Cabecalho titulo="Página inicial" subtitulo="Orion Teles" />

      <Link  href="/fundamentos">Página Fundamentos</Link>



    </main>
  );
}
