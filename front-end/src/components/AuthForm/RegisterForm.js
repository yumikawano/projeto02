import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../services/Users.service";
import { userLogin } from "../../store/User/User.actions";
import { Layout } from "../../components/Layout"

export function RegisterForm ({ redirectAfterLogin }) {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    address: '',
    nº: '',
    cidade: '',
    bairro: '',
    complemento: '',
    birth: '',
    cpf: ''
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
      const userData = await createUser(formData)
      dispatch(userLogin(userData))
      if (redirectAfterLogin) {
        navigate('/portal')
      }
    } catch (error) {
      const message = error.message === 'Email already exists'
        ? 'Este e-mail já está em uso.'
        : 'Falha ao fazer cadastro. Tente novamente.'
      toast.error(message)
      setIsSubmiting(false)
    }
  }
  return (
    <Layout>
          <Form onSubmit={handleSubmit}>
      <p className="h4">Cadastre-se</p>
      <Form.Group controlId="register-name" className="mb-3">
        <Form.Label className="m-0">Nome</Form.Label>
        <Form.Control
          placeholder="Informe seu nome"
          value={formData.name}
          onChange={handleChange}
          name="name"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-email" className="mb-3">
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
      <Form.Group controlId="register-password" className="mb-3">
        <Form.Label className="m-0">Senha</Form.Label>
        <Form.Control
          type='password'
          placeholder="Senha de acesso"
          value={formData.password}
          onChange={handleChange}
          name="password"
          required
          minLength={4}
        />
      </Form.Group>
      <Form.Group controlId="register-number" className="mb-3">
        <Form.Label className="m-0">Celular</Form.Label>
        <Form.Control
          placeholder="Informe seu número de celular"
          value={formData.number}
          onChange={handleChange}
          name="number"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-address" className="mb-3">
        <Form.Label className="m-0">Endereço</Form.Label>
        <Form.Control
          placeholder="Informe seu endereço"
          value={formData.address}
          onChange={handleChange}
          name="address"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-nº" className="mb-3">
        <Form.Label className="m-0">Nº</Form.Label>
        <Form.Control
          placeholder="Informe o número da sua residência"
          value={formData.nº}
          onChange={handleChange}
          name="nº"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-cidade" className="mb-3">
        <Form.Label className="m-0">Cidade</Form.Label>
        <Form.Control
          placeholder="Informe a cidade onde mora"
          value={formData.cidade}
          onChange={handleChange}
          name="cidade"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-bairro" className="mb-3">
        <Form.Label className="m-0">Bairro</Form.Label>
        <Form.Control
          placeholder="Informe seu bairro"
          value={formData.bairro}
          onChange={handleChange}
          name="bairro"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-complemento" className="mb-3">
        <Form.Label className="m-0">Complemento</Form.Label>
        <Form.Control
          placeholder="Informe o complemento"
          value={formData.complemento}
          onChange={handleChange}
          name="complemento"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-birth" className="mb-3">
        <Form.Label className="m-0">Data de nascimento</Form.Label>
        <Form.Control
          placeholder="Informe sua data de nascimento"
          value={formData.birth}
          onChange={handleChange}
          name="birth"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-cpf" className="mb-3">
        <Form.Label className="m-0">CPF</Form.Label>
        <Form.Control
          placeholder="Informe seu CPF"
          value={formData.cpf}
          onChange={handleChange}
          name="cpf"
          required
        />
      </Form.Group>
      <Button type='submit' variant="btn btn-danger" disabled={isSubmiting}>Criar conta</Button>
    </Form>
    </Layout>
  )
}