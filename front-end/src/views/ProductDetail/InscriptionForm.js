import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { Layout } from "../../components/Layout"

const initialFormData = {
    userName: '',
    userEmail: '',
    userNumber: '',
    userAddress: '',
    userBirth: '',
    userCPF: '',
    userpassword: ''
  }
  
  export function InscriptionForm ({ productId, onRegister }) {
    const [showSuccess, setShowSuccess] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [formData, setFormData] = useState(initialFormData)
      
    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          setErrorMsg(undefined)
          setIsSubmiting(true)
          await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, {
            method: 'POST',
            body: JSON.stringify({
              name: formData.userName,
              email: formData.userEmail,
              number: formData.userNumber,
              address: formData.userAddress,
              productId: parseInt(productId)
            }),
            headers: {
              'content-type': 'application/json'
            }
          })
          setShowSuccess(true)
          setFormData(initialFormData)
          onRegister()
        } catch (err) {
          console.error(err)
          setErrorMsg('Falha ao fazer cadastro. Tente novamente.')
        }
        setIsSubmiting(false)
      }
  return (
    <Layout>
      <h2>Formulário de Cadastro</h2>
      {showSuccess && (
        <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Cadastro realizado com sucesso.</Alert>
      )}
      {errorMsg && (
        <Alert variant="danger">{errorMsg}</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="inscription-name" className="mb-3">
          <Form.Label className="m-0">Nome</Form.Label>
          <Form.Control
            placeholder="Informe seu nome"
            value={formData.userName}
            onChange={handleChange}
            name="userName"
            required
          />
        </Form.Group>
        <Form.Group controlId="inscription-email" className="mb-3">
          <Form.Label className="m-0">E-mail</Form.Label>
          <Form.Control
            placeholder="exemplo@exemplo.com"
            value={formData.userEmail}
            onChange={handleChange}
            name="userEmail"
            required
          />
        </Form.Group>
        </Form>
        <Form.Group controlId="inscription-number" className="mb-3">
          <Form.Label className="m-0">Celular</Form.Label>
          <Form.Control
            placeholder="Informe seu número de celular"
            value={formData.userNumber}
            onChange={handleChange}
            name="userNumber"
            required
          />
        </Form.Group>
        <Form>
        <Form.Group controlId="inscription-name" className="mb-3">
          <Form.Label className="m-0">Endereço</Form.Label>
          <Form.Control
            placeholder="Informe seu endereço"
            value={formData.userAddress}
            onChange={handleChange}
            name="userAddress"
            required
          />
        </Form.Group>
        <Button type='submit' disabled={isSubmiting}>Cadastrar</Button>
      </Form>
    </Layout>
  )
} 