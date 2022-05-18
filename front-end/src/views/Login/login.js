import { useState } from "react"
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"
import { Layout } from "../../components/Layout"
import { Link } from "react-router-dom"


const initialFormData = {
    userEmail: '',
    userPassword: ''
}

export function Login ({ userId, onRegister }) {
  const [showSuccess, setShowSuccess] = useState(false)
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
        await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, {
          method: 'POST',
          body: JSON.stringify({
            email: formData.userEmail,
            password: formData.userPassword,
            productId: parseInt(userId)
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
        setErrorMsg('Falha ao fazer login. Tente novamente.')
      }
    }

return (
    <Layout>
       {showSuccess && (
        <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Cadastro realizado com sucesso.</Alert>
      )}
      {errorMsg && (
        <Alert variant="danger">{errorMsg}</Alert>
      )}
            <Container>
        <Row>
          <Col>
      <h2 className="mt-04">Acessar ou Criar Conta</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="inscription-name" className="mb-3">
          <Form.Label className="m-0">E-mail</Form.Label>
          <Form.Control
            placeholder="Informe seu e-mail"
            value={formData.userEmail}
            onChange={handleChange}
            name="userEmail"
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
        <Button  as={Link} to={'/login'} className="btn btn-danger">Entrar</Button>
        </Form>
        </Col>
        <Col>
        <h2 className="mt-06">Criar uma conta é rápido, fácil e gratuito!</h2>
        <Button as={Link} to={'/cadastro'} className="btn btn-light btn-outline-danger">Criar minha conta</Button>
        </Col>
      </Row>
      </Container>
    </Layout>
)
}