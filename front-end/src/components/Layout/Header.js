
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";
  import Logo from "../../assets/img/foto1.png";

export function Header() {
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
                  <NavDropdown title="Alimentação" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Calopsita</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Trinca-Ferro</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Papagaio</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Periquito</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Beija-Flor</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Sabiá</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Canário</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Outras Espécies</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Gaiolas e Viveiros" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Gaiolas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Viveiros</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Brinquedos e Poleiros" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Brinquedos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Poleiros</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title=" Acessórios" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Porta Frutas e Porta Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Bebedouros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Comedouros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Banheiras</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Ninhos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Bica Pedra</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Higiêne</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Farmácia" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Vermífugos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Antibióticos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
  
                <NavDropdown title="Peixes" id="basic-nav-dropdown">
                  <NavDropdown title="Alimentação" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Alimento Base</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Peixes de Fundo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Peixe Betta</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Ciclídeos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Kinguios e Carpas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Peixes Carnívoros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Peixes Marinhos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Outras Espécies</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Equipamentos e Acessórios" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Alimentador Automático</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Filtros e Mídias</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Iluminação</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Bombas e Compressores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Termostatos e Termômetros</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Aquecedores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Sifão</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Limpadores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Criadeiras</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Aquários e Baterias" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Aquário Kit</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Aquário Base</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Baterias</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Tratamento de Água" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Condicionador de Água</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Testes de Água</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Decoração" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Substratos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Rochas e Troncos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Enfeites</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Farmácia" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Suplementos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
  
                <NavDropdown title="Outros Pets" id="basic-nav-dropdown">
                <NavDropdown title="Coelhos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Gaiolas e Casinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Serragens e Granulados</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Feno e Alfafa</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Brinquedos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Higiêne</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                </NavDropdown>
                  <NavDropdown title="Hamster e Twister" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Gaiolas e Casinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Serragens e Granulados</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Feno e Alfafa</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Brinquedos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Higiêne</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Porquinho da Índia" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Gaiolas e Casinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Serragens e Granulados</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Feno e Alfafa</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Brinquedos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Higiêne</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Chinchilas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Gaiolas e Casinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Serragens e Granulados</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Feno e Alfafa</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Brinquedos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Higiêne</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Gerbil" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Gaiolas e Casinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Serragens e Granulados</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Feno e Alfafa</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Brinquedos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Furão" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Gaiolas e Casinhas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Serragens e Granulados</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Tartarugas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Aquaterrários</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Tocas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Largatos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Ração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Aquaterrários</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Tocas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Medicamentos e Vitaminas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
  
                <NavDropdown title="Casa e Jardim" id="basic-nav-dropdown">
                  <NavDropdown title="Jardim" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Sementes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Vasos e Pratos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Terras e Substratos</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Adubos e Fertilizantes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Enfeites e Decoração</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Regadores e Pulverizadores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Acessórios de Jardinagem</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Piscina" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Cloro para Piscina</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Algicidas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Clarificantes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Decantador</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Limpa Bordas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Regulador de PH</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Teste de Piscina</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Controle de Pragas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Raticidas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Repelentes</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Inseticidas</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Casa e Ambiente" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action3.10">Aromatizadores</NavDropdown.Item>
                  <NavDropdown.Item href="#action3.10">Diversos</NavDropdown.Item>
                  </NavDropdown>
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
                  <i className="bi bi-search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-search"
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
                    className="bi bi-person-circle"
                    viewBox="0 0 30 30"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
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
                    className="bi bi-cart-fill"
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
  