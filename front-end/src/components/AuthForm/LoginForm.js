import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../services/Users.service";
import { useNavigate, Link } from "react-router-dom"
import { userLogin } from "../../store/User/User.actions";
import { Layout } from "../Layout";

export function LoginForm ({ redirectAfterLogin }) {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setIsSubmiting(true)
      const userData = await login(formData)
      // Enviar para o redux
      dispatch(userLogin(userData))
      if (redirectAfterLogin) {
        navigate('/portal')
      }
    } catch (error) {
      const message = error.message === 'Credentials invalid.'
        ? 'E-mail ou senha inválidos.'
        : 'Falha ao fazer login. Tente novamente.'
      console.error(error)
      toast.error(message)
      setIsSubmiting(false)
    }
  }
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
<Form onSubmit={handleSubmit}>
      <p className="h3">Acessar ou Criar Conta</p>
      <Form.Group controlId="login-email" className="mb-3">
        <Form.Label className="m-0">E-mail</Form.Label>
        <Form.Control
          type='email'
          placeholder="exemplo@exemplo.com"
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
        />
      </Form.Group>
      <Form.Group controlId="login-password" className="mb-3">
        <Form.Label className="m-0">Senha</Form.Label>
        <Form.Control
          type='password'
          placeholder="Senha de acesso"
          value={formData.password}
          onChange={handleChange}
          name="password"
          required
        />
      </Form.Group>
      <Button type='submit' variant="btn btn-danger" disabled={isSubmiting}>Entrar</Button>
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