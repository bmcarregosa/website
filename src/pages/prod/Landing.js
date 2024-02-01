import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                  <img src={require("assets/img/bmc/capa2_cropped.jpeg")} width="100%"></img>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className="section section-lg pt-lg-0 pb-lg-5 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase" style={{alignItems: "center", display: "flex"}}>
                            <div className="icon icon-shape icon-shape-primary rounded-circle m-2">
                              <i className="ni ni-calendar-grid-58" />
                            </div>
                            Agenda
                          </h6>
                          <p className="text-justify description mt-3">
                            Calendário de romarias, festividades, concertos e outros eventos.
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={() => window.location.href='/agenda'}
                          >
                            Saber mais
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase" style={{alignItems: "center", display: "flex"}}>
                            <div className="icon icon-shape icon-shape-success rounded-circle m-2">
                              <i className="ni ni-hat-3" />
                            </div>
                            Escola de Música
                          </h6>
                          <p className="text-justify description mt-3">
                            A Escola de Música Sebastião Azevedo dedica-se à formação de jovens músicos.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={() => window.location.href='/escola'}
                          >
                            Saber mais
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase" style={{alignItems: "center", display: "flex"}}>
                            <div className="icon icon-shape icon-shape-warning rounded-circle m-2">
                              <i className="ni ni-circle-08" />
                            </div>
                            Contactos
                          </h6>
                          <p className="text-justify description mt-3">
                            Valorizamos o seu interesse. Entre em contacto para mais esclarecimentos.
                          </p>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={() => window.location.href='/contactos'}
                          >
                            Saber mais
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section pt-lg-0">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/bmc/trompetes.jpg")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-1">
                    <h3 className="mb-4">História</h3>
                    <p className="text-justify">
                      Fundada a 4 de Fevereiro de 1889 por escritura pública na residência paroquial de Carregosa, 
                      intitulada como "Philarmónica de Santa Cecília de Carregosa", teve como fundadores vários Carregosenses, 
                      destacando-se o Exmo Sr. Francisco Vaz da Silva, que foi o primeiro maestro da Banda. Desde Novembro de 2015 é regente o Professor Valter Palma, 
                      natural de Vila Real. Tem dois discos editados, em 2002 e em 2009. A 13 de Julho de 2013 foi condecorada com a mais alta distinção Honorífica 
                      da Freguesia de Carregosa, com uma medalha de ouro. A 26 de Novembro de 2016 obteve o 3 lugar do 1 prémio do CIB 
                      que se realizou no Europarque em Santa Maria da Feira. É de realçar que desta coletividade têm saído excelentes executantes para diversas 
                      Bandas Civis, Militares e várias Orquestras de renome nacional e internacional fruto do trabalho realizado pela escola de música. 
                      A BMC, atualmente é composta por cerca de 65 elementos, na sua maioria jovens, que partilham a paixão de interpretar música por um objetivo comum, 
                      elevar o nome da freguesia de Carregosa.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
