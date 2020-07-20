import React from "react";
import { FormGroup } from "reactstrap";

const Search: React.FC<{}> = () => {
  return (
    <FormGroup>
      <div className="custom-input-container">
        <input className="custom-input" />
        <i className="fa fa-search custom-input-icon" color="#fff" />
      </div>
    </FormGroup>
  );
};

export default Search;
