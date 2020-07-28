import React, { ChangeEvent } from "react";
import { FormGroup, Input } from "reactstrap";

const Search: React.FC<{
  handleStateSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regions: Array<Record<string, any>>;
  cities: Array<Record<string, any>>;
}> = ({ handleStateSelection, handleChange, regions = [], cities = [] }) => {
  return (
    <FormGroup>
      <div className="custom-input-container">
        <input
          className="custom-select"
          type="text"
          list="states"
          onChange={handleStateSelection}
          placeholder="UF"
        />
        <Input
          className="custom-input"
          type="text"
          list="cities"
          onChange={handleChange}
          placeholder="Digite para pesquisar"
        />
        <i className="fa fa-search custom-input-icon" color="#fff" />
      </div>
      <datalist id="states">
        {regions.map((r) => (
          <option key={r.initials}>{r.initials}</option>
        ))}
      </datalist>
      <datalist id="cities">
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </datalist>
    </FormGroup>
  );
};

export default Search;
