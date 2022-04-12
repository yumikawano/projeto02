import { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { CardProducts } from '../../components/CardProducts'
import { Layout } from '../../components/Layout'
import { Loading } from '../../components/Loanding'

export function ProductsView () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch(() => {
        setErrorMsg('Falha ao buscar produtos. Recarregue a página.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <Layout>
      <Container>
        <h1 className='text-center mt-4'>Produtos</h1>
        {loading && (
          <Loading />
        )}
        {errorMsg && (
          <Alert variant='danger'>{errorMsg}</Alert>
        )}
        <Row>
          {products.map(product => (
            <Col key={product.id} className='mb-4' xs={6} md={4} lg={3}>
              <CardProducts product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}