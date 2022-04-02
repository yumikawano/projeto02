import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
import Logo from "./assets/img/foto1.png";
import Master from "./assets/img/MasterCard-Logo.png";
import Visa from "./assets/img/visa-logo.png";
import Elo from "./assets/img/elo-logo.png";
import Pix from "./assets/img/pix.jpg";
import Whatsapp from "./assets/img/whatsapp.png";
import Instagram from "./assets/img/instagram.png";
import Facebook from "./assets/img/facebook.png";
import Cat from "./assets/img/foto2.jpg";
import Dog from "./assets/img/foto3.jpg";
import Promo from "./assets/img/foto4.png";
import Frete from "./assets/img/frete.png";
import Store from "./assets/img/store.png";
import "./assets/css/style.css";

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              className="logo"
              alt="Logo Pet Mania"
              width={70}
              height={70}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-header" />
          <Navbar.Collapse id="navbar-header">
            <Nav className="me-auto">
              <NavDropdown
                title="Cachorros"
                id="basic-nav-dropdown"
              >
                <NavDropdown title="Ração" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.1">Ração Seca</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.2">Ração Úmida</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.3">Ração Prescrita</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.4">Ração Natural</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Petiscos e Ossos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.5">Palitos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.6">Bifinhos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.7">Biscoitos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.8">Bolos e Chocolates</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.9">Bebidas e Molhos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Ossinhos</NavDropdown.Item>
                </NavDropdown>
              <NavDropdown title="Tapetes, Fraldas e Banheiros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.1">Tapetes Higiênicos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.2">Fraldas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.3">Banheiros</NavDropdown.Item>
                <NavDropdown.Item href="#action3.4">Cones</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Farmácia" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.5">Antipulgas e Carrapatos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.6">Demais Medicamentos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.7">Anti-inflamatórios</NavDropdown.Item>
                <NavDropdown.Item href="#action3.8">Antibióticos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.9">Suplementos e Vitaminas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Vermífugos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.5">Homeopáticos e Florais</NavDropdown.Item>
                <NavDropdown.Item href="#action3.6">Oftalmológicos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.7">Otológicos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.8">Cuidado Oral</NavDropdown.Item>
                <NavDropdown.Item href="#action3.9">Banho Terapêutico</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Roupas Cirúrgicas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Colares Elizabetanos</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Brinquedos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.5">Bichinhos de Pelúcia</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.6">Bolinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.7">Brinquedos em Nylon</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.8">Brinquedos Educativos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.9">Brinquedos de Corda</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Frisbees</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Mordedores</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Coleiras, Guias e Peitorais" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Coleiras</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Guias</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Peitorais</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Beleza e Limpeza" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action3.10">Banho à Seco</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Sabonetes</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Shampoos e Condicionadores</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Hidratantes</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Perfumes e Colônias</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Higiêne Bucal</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Pentes, Escovas e Rasqueadeiras</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Lenços Úmidecidos</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Limpeza de Olhos e Ouvidos</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Alicates e Tesouras</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Coletor de Fezes</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Eliminador de Odores e Desinfetantes</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Educadores, Repelentes e Atrativos</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Camas e Cobertores" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Almofadas e Colchonetes</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Camas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Edredons, Cobertores e Mantas</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Casas e Tocas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Casas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Tocas</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Acessórios de Alimentação" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Fontes</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Porta Ração</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Dosadores de Ração</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Comedouros</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Bebedouros</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Jogo Americano</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Mamadeiras</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Acessórios de Transporte" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Caixas de Transporte</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Bolsas de Transporte</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Carrinhos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Cintos de Segurança</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Cadeirinhas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Capas para Banco do Carro</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portões, Grades e Escadas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action3.10">Potões</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Grades</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Canil</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Portas</NavDropdown.Item>
              <NavDropdown.Item href="#action3.10">Escadas</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Roupas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Roupas de Inverno</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Roupas de Verão</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Diversos</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Adestramento e Comportamento" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Acessórios para Treinamento</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Focinheiras e Enforcadeiras</NavDropdown.Item>
              </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Gatos" id="basic-nav-dropdown">
                <NavDropdown title="Ração" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.1">Ração Seca</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.2">Ração Úmida</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.3">Ração Prescrita</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.4">Ração Natural</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Petiscos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.6">Bifinhos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.7">Biscoitos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Areias e Banheiros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.6">Areias</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.7">Sílica</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.6">Caixas de Areia</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.7">Banheiros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.6">Acessórios Sanitários</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Farmácia" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.5">Antipulgas e Carrapatos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.6">Demais Medicamentos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.7">Anti-inflamatórios</NavDropdown.Item>
                <NavDropdown.Item href="#action3.8">Antibióticos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.9">Suplementos e Vitaminas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Vermífugos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.5">Homeopáticos e Florais</NavDropdown.Item>
                <NavDropdown.Item href="#action3.6">Oftalmológicos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.7">Otológicos</NavDropdown.Item>
                <NavDropdown.Item href="#action3.9">Banho Terapêutico</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Roupas Cirúrgicas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Colares Elizabetanos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Arranhadores e Brinquedos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.5">Arranhadores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.6">Ratinhos e Bolinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.8">Brinquedos Educativos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.9">Brinquedos com Erva de Gato</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Varinhas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Beleza e Limpeza" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Banho à Seco e Talcos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Sabonetes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Shampoos e Condicionadores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Hidratantes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Perfumes e Colônias</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Higiêne Bucal</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Pentes, Escovas e Rasqueadeiras</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Lenços Úmidecidos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Limpeza de Olhos e Ouvidos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Alicates e Tesouras</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Eliminador de Odores e Desinfetantes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Educadores, Repelentes e Atrativos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Coleiras e Peitorais" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Coleiras</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Peitorais</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Acessórios de Alimentação"id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Fontes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Porta Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Dosadores de Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Comedouros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Bebedouros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Jogo Americano</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Mamadeiras</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Acessórios de Transporte" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Caixas de Transporte</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Bolsas de Transporte</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Carrinhos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Cintos de Segurança</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Cadeirinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Capas para Banco do Carro</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Camas, Almofadas e Tocas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Camas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Almofadas</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Tocas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Roupas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.10">Roupas de Inverno</NavDropdown.Item>
                <NavDropdown.Item href="#action3.10">Roupas de Verão</NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>

              <NavDropdown title="Pássaros" id="basic-nav-dropdown">
                <NavDropdown title="Alimentação" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Gaiolas e Viveiros" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Brinquedos e Poleiros" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title=" Acessórios" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Farmácia" id="basic-nav-dropdown"></NavDropdown>
              </NavDropdown>

              <NavDropdown title="Peixes" id="basic-nav-dropdown">
                <NavDropdown title="Alimentação" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Equipamentos e Acessórios" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Aquários e Baterias" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Tratamento de Água" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Decoração" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Farmácia" id="basic-nav-dropdown"></NavDropdown>
              </NavDropdown>

              <NavDropdown title="Outros Pets" id="basic-nav-dropdown">
              <NavDropdown title="Coelhos" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Hamster e Twister" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Porquinho da Índia" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Chinchilas" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Gerbil" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Furão" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Tartarugas" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Largatos" id="basic-nav-dropdown"></NavDropdown>
              </NavDropdown>

              <NavDropdown title="Casa e Jardim" id="basic-nav-dropdown">
                <NavDropdown title="Jardim" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Piscina" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Controle de Pragas" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="Casa e Ambiente" id="basic-nav-dropdown"></NavDropdown>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="btn-lupa" variant="Danger">
                <i class="bi bi-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </i>
              </Button>
            </Form>
            <Button id="btn-login" variant="Danger">
              <i className="bi bi-person-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 30 30"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </i>
            </Button>
            <Button id="btn-cart" variant="Danger">
              <i className="bi bi-cart-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-cart-fill"
                  viewBox="0 0 30 30"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </i>
              <span className="btn-cart-badge"></span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

function Banner() {
  return (
    <root className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Cat} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Dog} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Promo} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="frete"
              src={Frete}
              alt="Receba em horas"
              width={100}
              height={150}
            />
          </div>
          <div className="col">
            <img
              className="store"
              src={Store}
              alt="Retire e troque na loja"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="p-footer text-center">Receba em horas</p>
          </div>
          <div className="col">
            <p className="p-footer text-center">Retire e troque na loja</p>
          </div>
        </div>
      </div>
    </root>
  );
}

function Footer() {
  return (
    <footer className="footer text-left text-black py-2 mt-4">
      <div className="container-red">
        <div className="row">
          <div className="col col-pagamentos">
            <p className="p-footer">Formas de pagamento:</p>
            <img
              className="img-card"
              src={Master}
              alt="Logo Master Card"
              width={30}
              height={20}
            />
            <img
              className="img-card"
              src={Visa}
              alt="Logo Visa Card"
              width={30}
              height={20}
            />
            <img
              className="img-card"
              src={Elo}
              alt="Logo Elo Card"
              width={30}
              height={20}
            />
            <img
              className="img-card"
              src={Pix}
              alt="Logo Pix"
              width={30}
              height={20}
            />
          </div>
          <div className="col col-redes">
            <p className="p-footer">Nossas Redes</p>
            <img
              className="img-redes"
              src={Whatsapp}
              alt="Botão Whatsapp"
              width={30}
              height={30}
              href=""
            />
            <a href="https://www.instagram.com/petmaniamga/">
              <img
                className="img-redes"
                src={Instagram}
                alt="Botão Instagram"
                width={30}
                height={30}
              />
            </a>
            <img
              className="img-redes"
              src={Facebook}
              alt="Botão Facebook"
              width={30}
              height={30}
              href="https://pt-br.facebook.com/petmaniamaringa"
            />
          </div>
        </div>
      </div>
      <p className="footer-p">Pet Mania S.A</p>
      <p className="footer-p">CNPJ: 00.000.000/0000-00</p>
      <p className="footer-p">
        Av. Mauá 1308 , Zona 03, Maringá - PR, 87050-020
      </p>
      <p className="footer-p">Compra segura</p>
      <p className="footer-p">
        A Pet Mania garante segurança para suas informações pessoais e
        financeiras
      </p>
      <p className="footer-p text-center m-0">
        Copyright 2022 © Todos os direitos reservados à Pet Mania
      </p>
    </footer>
  );
}
function HomeView() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
}

function App() {
  return <HomeView />;
}

export default App;
