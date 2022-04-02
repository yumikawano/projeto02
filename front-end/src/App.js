import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap'
import Logo from './assets/img/foto1.png'
import Master from './assets/img/MasterCard-Logo.png'
import Visa from './assets/img/visa-logo.png'
import Elo from './assets/img/elo-logo.png'
import Pix from './assets/img/pix.jpg'
import Whatsapp from './assets/img/whatsapp.png'
import Instagram from './assets/img/instagram.png'
import Facebook from './assets/img/facebook.png'
import Cat from './assets/img/foto2.jpg'
import Dog from './assets/img/foto3.jpg'
import Promo from './assets/img/foto4.png'
import Frete from './assets/img/frete.png'
import Store from './assets/img/store.png'
import './assets/css/style.css'

function Header (){
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} className='logo' alt='Logo Pet Mania' width={70} height={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-header" />
          <Navbar.Collapse id="navbar-header">
          <Nav className="me-auto">

          <NavDropdown title="Cachorro" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Ração</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Petiscos e Ossos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tapetes, Fraldas e Banheiros</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Farmácia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Brinquedos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Coleiras, Guias e Peitorais</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Beleza e Limpeza</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Camas e Cobertores</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Casas e Tocas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Acessórios de Alimentação</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Acessórios de Transporte</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Portões, Grades e Escadas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Roupas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Adestramento e Comportamento</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>
        
        <NavDropdown title="Gatos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Ração</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Petiscos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Areias e Banheiros</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Farmácia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Arranhadores e Brinquedos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Beleza e Limpeza</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Coleiras e Peitorais</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Acessórios de Alimentação</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Acessórios de Transporte</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Camas, Almofadas e Tocas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Roupas</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>

        <NavDropdown title="Pássaros" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Alimentação</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Gaiolas e Viveiros</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Brinquedos e Poleiros</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Acessórios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Farmácia</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>

        <NavDropdown title="Peixes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Alimentação</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Equipamentos e Acessórios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Aquários e Baterias</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Tratamento de Água</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Decoração</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Farmácia</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>
        
        <NavDropdown title="Outros Pets" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Coelhos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hamster e Twister</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Porquinho da Índia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Chinchilas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Gerbil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Furão</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Tartarugas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Largatos</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>

        <NavDropdown title="Casa e Jardim" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Jardim</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Piscina</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Controle de Pragas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Casa e Ambiente</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Livros e Presentes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Conveniência</NavDropdown.Item>
            <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
       <Button className="btn-lupa" variant='Danger'><i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg></i></Button>
      </Form>
      <Button id='btn-login' variant="Danger"><i className="bi bi-person-circle"><svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" class="bi bi-person-circle" viewBox="0 0 30 30">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg></i>
      </Button>
      <Button id="btn-cart" variant="Danger"><i className="bi bi-cart-fill"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 30 30">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></i>
        <span className="btn-cart-badge"></span>
      </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

function Footer () {
  return (
    <footer className='footer text-left text-black py-2 mt-4'>
      <div className='container container-red'>
        <div className='row'>
          <div className='col col-pagamentos'>
            <p className='footer'>Formas de pagamento:</p>
            <img src={ Master } alt='Logo Master Card' width={30} height={20} />
            <img src={ Visa } alt='Logo Visa Card' width={30} height={20} />
            <img src={ Elo } alt='Logo Elo Card' width={30} height={20} />
            <img src={ Pix } alt='Logo Pix' width={30} height={20} />
          </div>
          <div className='col col-redes'>
            <p className='footer'>Nossas Redes</p>
            <img className='img-redes'src={ Whatsapp }alt="Botão Whatsapp" width={30} height={30} href='' />
            <img className='img-redes'src={ Instagram }alt="Botão Instagram" width={30} height={30} href='https://www.instagram.com/petmaniamga/'/>
            <img className='img-redes'src={ Facebook }alt="Botão Facebook" width={30} height={30} href='https://pt-br.facebook.com/petmaniamaringa/'/>
          </div>
        </div>
      </div>
      <p className='m-0'>Pet Mania S.A</p>
      <p className='m-0'>CNPJ: 00.000.000/0000-00</p>
      <p className='m-0'>Av. Mauá 1308 , Zona 03, Maringá - PR, 87050-020</p>
      <p className='m-0'>Compra segura</p>
      <p className='m-0'>A Pet Mania garante segurança para suas informações pessoais e financeiras</p>
      <p className='text-center m-0'>Copyright 2022 © Todos os direitos reservados à Pet Mania</p>
    </footer>
  )
}
function HomeView () {
  return (
  <>
  <Header />
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Cat}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Dog}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Promo}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<img className='frete' src={Frete} alt="Receba em horas" width={150} height={150} />
<img className='store' src={Store} alt="Retire e troque na loja" width={150} height={150}/>
<div className='container'>
  <div className='row'>
    <div className='col'>
      <p className='footer'>Receba em horas</p>
    </div>
    <div className='col'>
      <p className='footer'>Retire e troque na loja</p>
    </div>
  </div>
</div>
  <Footer />
  </>
  )
}


function App() {
  return <HomeView />
}

export default App;
