import { Modal } from "react-bootstrap";

const About = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <h4>What is this site?</h4>
      </Modal.Header>
      <Modal.Body>
        <p>
          This site is a collection of sustainable alternatives to the foods we
          eat every day. I wanted make a collection of sustainable foods to
          drive my own purchasing decisions and to help anyone who wants to make
          the Earth a livable place for future generations.
        </p>
        <p>
          Things listed here should be from brands that adhere to safe,
          sustainable practices in production.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default About;
