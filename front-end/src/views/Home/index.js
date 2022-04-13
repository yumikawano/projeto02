import { Carousel } from "react-bootstrap";
import Cat from "../../assets/img/foto2.jpg";
import Dog from "../../assets/img/foto3.jpg";
import Promo from "../../assets/img/foto4.jpg";
import Frete from "../../assets/img/frete.png";
import Store from "../../assets/img/store.png";
import { Layout } from "../../components/Layout";


export function Home() {
  return (
    <Layout>
      <div className="carousel">
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
      </div>
    </Layout>
  );
}
