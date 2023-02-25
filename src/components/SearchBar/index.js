import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SearchBar = (props) => {
  return (
    <Form className="d-flex mb-4" onSubmit={props.handleFormSubmit}>
      <Form.Control
        value={props.search}
        onChange={props.handleInputChange}
        type="text"
        placeholder="Search Player's Name"
        className="me-2"
      />
      {/* <Button type="submit">Search</Button> */}
    </Form>
  );
};
