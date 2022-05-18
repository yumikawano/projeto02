import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { UpsertProductForm } from '../../components/UpsertProductForm'
import { createProduct } from '../../services/Products.service'

export function AdminAddProductView () {
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
    try {
      await createProduct(formData)
      toast.success('Produto cadastrado com sucesso.')
      navigate('/portal/produtos')
    } catch {
      toast.error('Falha ao cadastrar produto. Tente novamente.')
    }
  }
  return (
    <LayoutPortal>
      <h1 className='mt-4'>Novo produto</h1>
      <UpsertProductForm onSubmit={handleSubmit} />
    </LayoutPortal>
  )
}