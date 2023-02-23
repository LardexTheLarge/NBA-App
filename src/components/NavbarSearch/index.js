import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NavbarSearch = (props) => {
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          placeholder="Search"
          className="me-2"
        />
        <Button onClick={props.handleFormSubmit} type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};
