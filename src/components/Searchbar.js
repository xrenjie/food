import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const Searchbar = ({ searchByName }) => {
  const [searchName, setSearchName] = useState("");

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const handleSearch = (name) => {
    searchByName(name);
  };

  const handleReset = (e) => {
    setSearchName("");
    handleSearch("");
  };

  return (
    <div>
      <Row className="Searchbar">
        <Col>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchName}
            onChange={onChangeSearchName}
            onInput={(e) => handleSearch(e.target.value)}
          />
        </Col>
        <Col md="auto">
          <div className="input-group-append">
            <Button className="btn" type="button" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Searchbar;
