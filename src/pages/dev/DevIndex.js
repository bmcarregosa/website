import React from "react";
import { Container, Row } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Hero from "../../components/ExampleSections/Hero.js";
import Buttons from "../../components/ExampleSections/Buttons.js";
import Inputs from "../../components/ExampleSections/Inputs.js";
import CustomControls from "../../components/ExampleSections/CustomControls.js";
import Menus from "../../components/ExampleSections/Menus.js";
import Navbars from "../../components/ExampleSections/Navbars.js";
import Tabs from "../../components/ExampleSections/Tabs.js";
import Progress from "../../components/ExampleSections/Progress.js";
import Pagination from "../../components/ExampleSections/Pagination.js";
import Pills from "../../components/ExampleSections/Pills.js";
import Labels from "../../components/ExampleSections/Labels.js";
import Alerts from "../../components/ExampleSections/Alerts.js";
import Typography from "../../components/ExampleSections/Typography.js";
import Modals from "../../components/ExampleSections/Modals.js";
import Datepicker from "../../components/ExampleSections/Datepicker.js";
import TooltipPopover from "../../components/ExampleSections/TooltipPopover.js";
import Carousel from "../../components/ExampleSections/Carousel.js";
import Icons from "../../components/ExampleSections/Icons.js";
import Login from "../../components/ExampleSections/Login.js";
import Download from "../../components/ExampleSections/Download.js";

class DevIndex extends React.Component {
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
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default DevIndex;
