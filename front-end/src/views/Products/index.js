import { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { CardProducts } from '../../components/CardProducts'
import { Layout } from '../../components/Layout'
import { Loading } from '../../components/Loading'
import { getProducts } from '../../services/Products.service'

export function ProductsView () {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const data = await getProducts()
        setProduct(data)
      } catch {
        setErrorMsg('Falha ao buscar produtos. Recarregue a página.')
      }
      setLoading(false)
    }
  fetchProducts()
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
          {product.map(product => (
            <Col key={product.id} className='mb-4' xs={6} md={4} lg={3}>
              <CardProducts product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}