import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";
import { Link } from "react-router-dom";

export function ProductDetailView () {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  const fetchProduct = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}?_embed=inscriptions`)
      if (!response.ok) {
        throw new Error('Response not ok.')
      }
      const data = await response.json()
      setProduct(data)
      setLoading(false)
    } catch (err) {
      const message = err.message === 'Response not ok.'
        ? '404'
        : 'Falha ao buscar informações do produto. Recarregue a página.'
      setErrorMsg(message)
      setLoading(false)
    }
  }, [id])
  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])
  if (loading) {
    return <Loading />
  }
  if (errorMsg === '404') {
    return <NotFoundView />
  }
  return (
    <Layout>
        <Container className="product-detail-container">
        {errorMsg ? (
          <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
        ) : (
          <>
           <h1 className="text-center mt-4">{product.name}</h1>
           <div class="card" className="width: 18rem;">
           <div class="container">
  <div class="row">
    <div class="col">
      <img src={product.image} className="card-img-left" alt="..."></img>
    </div>
    <div class="col">
  <div class="card-body">
    <p class="card-text">{product.description}</p>
    <button  as={Link} to={`/produtos/${product.id}`} class="btn btn-danger">Comprar</button>
    </div>
  </div>
</div>
  </div>
</div>
        </>
        )}
        
      </Container>
    </Layout>
  )
}