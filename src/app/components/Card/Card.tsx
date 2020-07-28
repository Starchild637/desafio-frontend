import React from "react";
import { Row, Col } from "reactstrap";
import { format, parseISO } from "date-fns";
import { pt as locale } from "date-fns/locale";
import iconBuilder from "utils/iconBuilder";

interface ICard {
  data: any;
  textAlign?: string;
  iconSize?: number;
  fontSize?: number;
  location: any;
}

const Card: React.FC<ICard> = ({
  data,
  textAlign = "center",
  iconSize = 128,
  fontSize = 42,
  location,
}) => {
  console.log(data);

  const dateBuilder = (date: number) => {
    const newDate = new Date(data?.date * 1000)
      .toLocaleDateString()
      .split("/")
      .reverse()
      .join("-");
    return format(parseISO(newDate), "iiii", { locale }).toUpperCase();
  };

  const buildIcon = (code: number) => {
    const options = iconBuilder.find((item) => item.codes.includes(code));
    return options?.icon;
  };

  return (
    <div className="container d-flex flex-column default-card justify-content-between">
      <Row
        className={`text-${textAlign} align-items-center justify-content-center mb-4`}
      >
        <Col style={{ fontSize: fontSize }}>{dateBuilder(data?.date)}</Col>
      </Row>
      <Row
        className={`text-${textAlign} align-items-center justify-content-center`}
      >
        <Col style={{ fontSize }}>{location?.city}</Col>
      </Row>
      <Row
        className={`text-${textAlign} align-items-center justify-content-center mb-4`}
      >
        <Col>
          <i className={buildIcon(data?.code)} style={{ fontSize: iconSize }} />
        </Col>
      </Row>
      <Row
        style={{ fontSize: "48px" }}
        className={`text-${textAlign} align-items-center justify-content-center`}
      >
        <Col>
          <i className="fas fa-arrow-down" /> {data?.low}°
        </Col>
        <Col>
          <i className="fas fa-arrow-up" /> {data?.high}°
        </Col>
      </Row>
    </div>
  );
};

export default Card;
