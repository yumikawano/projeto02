import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { UpsertProductForm } from "../../components/UpsertProductForm";
import { getProductsById, updateProduct } from "../../services/Products.service"

export function AdminEditProductView () {
  const { id } = useParams()
  const [product, setProduct] = useState()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductsById(id)
        setProduct(productData)
      } catch {
        toast.error('Falha ao buscar dados do produto. Recarregue a página.')
      }
    }
    fetchProduct()
  }, [id])
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
    try {
      await updateProduct(id, formData)
      toast.success('Produto alterado com sucesso.')
      navigate('/portal/produtos')
    } catch {
      toast.error('Falha ao alterar produto. Tente novamente.')
    }
  }
  return (
    <LayoutPortal>
      <h1 className="mt-4">Editar produto</h1>
      {product ? (
        <UpsertProductForm
          initialValue={{
            name: product.name,
            coordinator: product.coordinator,
            shortDescription: product.shortDescription,
            description: product.description,
            image: product.image
          }}
          buttonLabel='Alterar'
          onSubmit={handleSubmit}
        />
      ) : (
        <Loading />
      )}
    </LayoutPortal>
  )
}