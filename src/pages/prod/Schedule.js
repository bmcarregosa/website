import React from "react";
import { Card, Container, Row, Col, Button } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

const data = [
  { tipo: "Concerto", data: '25 de Abril', evento: "Apresentação aos Sócios", local: "Auditório Diamantino Melo", horario: "16h" },
  { tipo: "Festa", data: '19 de Maio', evento: "Sra. de Fátima", local: "Bagunte - Vila do Conde", horario: "08h-21h"},
  { tipo: "Concerto", data: '30 de Maio', evento: "Corpo de Deus", local: "Carregosa", horario: "16h-20h" },
  { tipo: "Concerto", data: '10 de Junho', evento: "Encontro de Bandas", local: "Oliveira de Azeméis", horario: "09h-19h"}, 
  { tipo: "Festa", data: '16 de Junho', evento: "Sto. António", local: "Silvares - Carregosa", horario: "14h-00h30" },
  { tipo: "Festa", data: '23 de Junho', evento: "São João", local: "Braga", horario: "08h-01h" },
  { tipo: "Festa", data: '7 de Julho', evento: "São Pedro", local: "Cesar", horario: "14h-00h30" },
  { tipo: "Festa", data: '21 de Julho', evento: "Festa do Senhor", local: "Tropeço - Arouca", horario: "09h-20h" },
  { tipo: "Festa", data: '27 de Julho', evento: "Sta. Ana e Sto. António", local: "Carvoeiro - Viana", horario: "14h-01h" },
  { tipo: "Festa", data: '28 de Julho', evento: "São Tiago", local: "Codal - Vale de Cambra", horario: "14h-20h" },
  { tipo: "Festa", data: '3 de Agosto', evento: "Festas Concelhias", local: "Vila Nova de Cerveira", horario: "13h-00h" },
  { tipo: "Festa", data: '11 de Agosto', evento: "Sra. do Rosário", local: "Ervedosa do Douro", horario: "08h-20h" },
  { tipo: "Festa", data: '15 de Agosto', evento: "Sra. da Saúde", local: "Cabeçais - Arouca", horario: "08h-20h" },
  { tipo: "Festa", data: '16 de Agosto', evento: "Sra. do Amparo", local: "Felgar - Torre de Moncorvo", horario: "08h-20h" },
  { tipo: "Festa", data: '25 de Agosto', evento: "Sra. da Ribeira", local: "Teamonde - Carregosa", horario: "14h-20h" },
  { tipo: "Festa", data: '8 de Setembro', evento: "Feiras Novas", local: "Ponte de Lima", horario: "08h-01h" },
  { tipo: "Festa", data: '29 de Setembro', evento: "São Miguel", local: "Azagães - Carregosa", horario: "08h-00h30" },
];

class Unready extends React.Component {
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
            <section className="section section-lg section-shaped pb-150">
              <div className="shape shape-style-1 shape-default">
                <span className="span-150" />
                <span className="span-50" />
                <span className="span-50" />
                <span className="span-75" />
                <span className="span-100" />
                <span className="span-75" />
                <span className="span-50" />
                <span className="span-100" />
                <span className="span-50" />
                <span className="span-100" />
              </div>
              <Container className="py-lg-md d-flex pt-0">
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
          </div>

          <section className="section section-lg pt-lg-100 margin-custom">
            <Container>
              <Card className="card-profile shadow">
                <div className="px-4">
                  <div className="text-center mt-6">
                    <h4>
                      Programa de Festas e Concertos
                    </h4>
                    <div className="h6 mt-2">
                      <i className="ni business_briefcase-24 mr-2" />
                      Banda de Música de Carregosa
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top ct-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Evento</th>
                          <th>Local</th>
                          <th>Horário</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(row => (
                          <tr key={row.id}>
                            <td>{row.data}</td>
                            <td>{row.evento}</td>
                            <td>{row.local}</td>
                            <td>{row.horario}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Unready;
