import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { Layout } from "../../components/Layout"
import { createInscription } from "../../services/Inscriptions.service"


const initialFormData = {
    userName: '',
    userEmail: '',
    userNumber: '',
    userAddress: '',
    userBirth: '',
    userCPF: '',
    userPassword: ''
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
          await createInscription({
            name: formData.userName,
            email: formData.userEmail,
            number: formData.userNumber,
            address: formData.userAddress,
            birth: formData.userBirth,
            cpf: formData.userCPF,
            password: formData.userPassword,
            productId: parseInt(productId)
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
        <Form.Group controlId="inscription-number" className="mb-3">
        <Form.Label className="m-0">Data de nascimento</Form.Label>
        <Form.Control
            placeholder="Informe sua data de nascimento"
            value={formData.userBirth}
            onChange={handleChange}
            name="userBirth"
            required
          />
        </Form.Group>
        <Form.Group controlId="inscription-number" className="mb-3">
        <Form.Label className="m-0">CPF</Form.Label>
        <Form.Control
            placeholder="Informe seu CPF"
            value={formData.userCPF}
            onChange={handleChange}
            name="userCPF"
            required
          />
        </Form.Group>
        <Form.Group controlId="inscription-name" className="mb-3">
          <Form.Label className="m-0">Senha</Form.Label>
          <Form.Control
            placeholder="Informe sua senha"
            value={formData.userPassword}
            onChange={handleChange}
            name="userPassword"
            required
          />
        </Form.Group>
        
      </Form>
    </Layout>
  )
} 