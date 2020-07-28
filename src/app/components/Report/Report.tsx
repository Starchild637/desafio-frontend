import React, { useEffect, useState, createRef } from "react";
import BgWeather from "../BgWeather";
import Card from "../Card";
import Search from "../Search";
import { Row, Col } from "reactstrap";
import api from "api";
import { states, cities as citiesPerState } from "../../../utils/cities";
import { slugify } from "utils/masks";
import iconBuilder from "../../../utils/iconBuilder";

const Report: React.FC<{}> = () => {
  const [search, setSearch] = useState<string>("");
  const [regions, setRegions] = useState<Array<Record<string, any>>>([]);
  const [region, setRegion] = useState<any>(null);
  const [cities, setCities] = useState<Array<Record<string, any>>>([]);
  const [location, setLocation] = useState<any>(null);
  const [forecasts, setForecasts] = useState<Array<Record<string, any>>>([]);
  useEffect(() => {
    const textToSearch = slugify(search);
    if (location) {
      requestWeather(`${location}, ${region}`);
    }
  }, [location]);

  useEffect(() => {
    findLocation(region);
  }, [region]);

  const buildReportData = (data: Array<any>, location: any) => {
    const heading = data[0];
    const rest = data.filter(
      (item: any, index: number) => index !== 0 && index < 4
    );
    return [{ heading, rest, location }];
  };

  const requestWeather = async (location: string) => {
    let baseUrl = "https://weather-ydn-yql.media.yahoo.com/forecastrss?u=c";
    const params: any = { format: "json", location };
    Object.keys(params).forEach(
      (param) => (baseUrl += `&${param}=${params[param]}`)
    );
    return api().get(baseUrl, "", "", (error, data: any, result) => {
      if (error) {
        console.log(error);
      } else {
        const toJson: any = JSON.parse(data);
        setForecasts(buildReportData(toJson.forecasts, toJson.location));
      }
    });
  };

  const findLocation = (value: string) => {
    const locations = citiesPerState(region);
    setSearch(value);
    setCities(locations);
  };

  const fireSearch = (value: string) => {
    const normalize = slugify(value);
    const location: any = cities.find(
      (value: any) => slugify(value) === normalize
    );
    location && requestWeather(`${location}, ${region}`);
  };

  const findRegionByInitials = (initials: string) => {
    const foundRegion: any = states.filter((register) =>
      initials
        .split("")
        .some((c) => register.initials.toLowerCase().includes(c))
    );
    setRegions(foundRegion);
  };

  const getBackground = () => {
    return forecasts[0]?.heading?.text;
  };

  const buildBackground = () => {
    const options = iconBuilder.find((item: any) => {
      return item.codes.includes(forecasts[0]?.heading?.code);
    });
    return options?.background;
  };

  return (
    <BgWeather type={buildBackground()}>
      <Row className="m-5 justify-content-center align-items-center">
        <Col sm="5">
          <Search
            handleStateSelection={(e) => {
              findRegionByInitials(e.target.value);
              setRegion(e.target.value);
            }}
            cities={cities}
            regions={regions}
            handleChange={(e) => fireSearch(e.target.value)}
          />
        </Col>
      </Row>
      <React.Fragment>
        <Row className="m-5 justify-content-center">
          {forecasts.map((item: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <Col sm="5" className="p-1">
                  <Card location={item.location} data={item.heading} />
                </Col>
                <Col sm="5" className="align-self-center">
                  {item.rest.map((data: any, index: number) => {
                    return (
                      <Row key={index} className="p-1">
                        <Card
                          location={data.location}
                          fontSize={28}
                          textAlign="left"
                          data={data}
                        />
                      </Row>
                    );
                  })}
                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      </React.Fragment>
    </BgWeather>
  );
};

export default Report;
