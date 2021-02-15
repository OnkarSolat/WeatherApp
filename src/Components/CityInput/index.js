import React from "react";
import { Form, Button } from "react-bootstrap";

const CityInput = ({ city, setCity, fetchWeather }) => {
  const [error, setError] = React.useState("");
  const handleInputChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  const handleSubmit = () => {
    if (!city) {
      setError("City field should not be empty");
    } else {
      setError("");
      fetchWeather();
    }
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City </Form.Label>
        <Form.Control
          value={city}
          type="text"
          placeholder="Enter City Here"
          onChange={handleInputChange}
        />
      </Form.Group>
      <p className="text-danger">{error}</p>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default CityInput;
