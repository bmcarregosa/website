/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/bmc/maestro_1x1.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                    </Col>
                    <Col className="order-lg-1" lg="4">
                    </Col>
                  </Row>
                  <div className="text-center mt-9">
                    <h3>
                      Valter Palma{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Vila Real, Portugal
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Maestro - Banda de Carregosa
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Escola Superior de Música e Artes do Espetáculo
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-justify">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Valter Osório Palma natural de Nogueira (Vila Real) nasceu em 1985. Iniciou os seus estudos na Banda Musical de Nogueira com sete anos. Ingressou no Conservatório de Música de Vila Real na classe de Clarinete com o professor Luís Santos onde concluiu o curso básico com a nota de exame de 20 valores. Ingressa posteriormente na Escola Superior de Música e Artes do Espetáculo (ESMAE), onde obteve a Licenciatura em Clarinete na classe do professor Nuno Pinto. 

                        Participou em Masterclasses em Portugal e Espanha com os professores António Saiote, Michel Arrignon, Thomas Muller, Juan Ferrer, Nuno Pinto, Carlos Alves, José Ricardo Freitas, Luís Santos, Tiago Abrantes, Etienne Lamaison, Vitor Pereira, Valdemar Rodrigues, entre outros. 

                        Ao nível de música de câmara apresentou-se em várias formações tendo como professores: Luís Santos, Nuno Pinto, Vítor Pereira, José Parra, Sofia Lourenço, entre outros. 

                        Representou a cidade de Vila Real na Mostra Musical do Eixo Atlântico onde foi finalista na categoria solista e obteve o 1º prémio na categoria de música de câmara. 
                        Em 2012 foi premiado com o 2º Prémio na classe sénior de clarinete no concurso internacional "Terras de La Sallete". 

                        Colaborou com a Filarmonia das Beiras, Orquestra Yduko, Sinfonieta da Esmae, Orquestra Ligeira «Douro Cultural» Big Band, Ensemble da Escola Internacional de Música da Fundação Príncipe das Astúrias. 

                        Desempenha as funções de Maestro e Diretor Artístico na Banda Filarmónica de São Mamede de Ribatua e Maestro da Orquestra Juvenil da escola de música da banda desde Outubro de 2009, onde gravou um cd e participou em concursos e festivais em Portugal e em Espanha, dirigindo em grandes salas de Portugal como Europarque e Casa da Música. 

                        Tem frequentado vários estágios de direcção na qual teve a oportunidade de dirigir o I e II Estágios da Banda Distrital de Vila Real, Banda Militar do Porto, entre outras. 

                        É aluno de Direção Musical na Academia Portuguesa de Banda tendo como professor o maestro Paulo Martins. 
                        É membro fundador do ensemble de clarinetes "VR Clarinete Ensemble".
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
