import React from "react";
import BgWeather from "../BgWeather";
import Card from "../Card";
import Search from "../Search";
import { Row, Col } from "reactstrap";

const Report: React.FC<{}> = () => {
  return (
    <BgWeather type="rain">
      <Row className="m-5 justify-content-center align-items-center">
        <Col sm="4">
          <Search />
        </Col>
      </Row>
      <Row className="m-5 justify-content-center">
        <Col sm="4" className="p-1">
          <Card />
        </Col>
        <Col sm="4" className="align-self-center">
          <Row className="p-1">
            <Card />
          </Row>
          <Row className="p-1">
            <Card />
          </Row>
          <Row className="p-1">
            <Card />
          </Row>
        </Col>
      </Row>
    </BgWeather>
  );
};

export default Report;
