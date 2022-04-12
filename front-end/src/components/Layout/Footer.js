import Master from "../../assets/img/MasterCard-Logo.png";
import Visa from "../../assets/img/visa-logo.png";
import Elo from "../../assets/img/elo-logo.png";
import Pix from "../../assets/img/pix.jpg";
import Whatsapp from "../../assets/img/whatsapp.png";
import Instagram from "../../assets/img/instagram.png";
import Facebook from "../../assets/img/facebook.png";


export function Footer() {
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
              <a href="https://wa.me/+5544998472200" target="_blank">
              <img
                className="img-redes"
                src={Whatsapp}
                alt="Botão Whatsapp"
                width={30}
                height={30}
                href=""
              />
              </a>
              <a href="https://www.instagram.com/petmaniamga/" target="_blank">
                <img
                  className="img-redes"
                  src={Instagram}
                  alt="Botão Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://pt-br.facebook.com/petmaniamaringa" target="_blank">
              <img
                className="img-redes"
                src={Facebook}
                alt="Botão Facebook"
                width={30}
                height={30}
              />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-p">Pet Mania LTDA</p>
        <p className="footer-p">CNPJ: 04.137.823/0001-14</p>
        <p className="footer-p">
          Av. Dona Sophia Rasgulaeff, 3222, Jd. Oásis, Maringá - PR, 87043-010
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