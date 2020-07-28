import React from "react";
import { Row, Col, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import studio from "assets/images/studio.jpg";

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <Container fluid style={{ backgroundImage: `url(${studio})` }}>
      <div className="row d-flex align-items-center justify-content-center vh-100">
        <div className="card p-5 my-auto d-flex flex-column">
          <Row>
            <Col>Desafio Front-End</Col>
          </Row>
          <Row>
            <Col className="my-auto">
              <button
                className="btn btn-primary btn-block"
                onClick={() => history.push({ pathname: "/forecast" })}
              >
                Consultar previsão do tempo
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Home;
