
import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";

export function NotFoundView () {
  return (
    <Layout>
      <Container className="text-center mt-4">
        <h1>Página não encontrada</h1>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <p>Utilize o menu principal para navegar entre as páginas.</p>
      </Container>
    </Layout>
  )
}