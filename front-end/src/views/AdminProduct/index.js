import { useEffect, useState } from 'react'
import { LayoutPortal } from '../../components/LayoutPortal'
import { PortalHeader } from '../../components/PortalHeader'
import { getProducts } from '../../services/Products.service'
import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading'
import { TableProducts } from './TableProducts'

export function AdminProductsView () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch {
      toast.error('Falha ao buscar produtos. Recarregue a página.')
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <LayoutPortal>
      <PortalHeader
        title='Produtos cadastrados'
        buttonText='Novo produto'
        buttonLink='/portal/produtos/cadastro'
      />
      {loading && <Loading />}
      <TableProducts products={products} onDeleteProduct={fetchProducts} />
    </LayoutPortal>
  )
}