import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";

export function ProductDetailView () {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
        if (!response.ok) {
          throw new Error('Response not ok.')
        }
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        const message = err.message === 'Response not ok.'
          ? '404'
          : 'Falha ao buscar informações do curso. Recarregue a página.'
        setErrorMsg(message)
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (errorMsg === '404') {
    return <NotFoundView />
  }
  return (
    <Layout>
      <Container>
        {errorMsg ? (
          <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
        ) : (
          <h1>{product?.name}</h1>
        )}
      </Container>
    </Layout>
  )
}