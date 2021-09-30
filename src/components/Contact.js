import { Modal } from "react-bootstrap";

const Contact = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <h4>Contact</h4>
      </Modal.Header>
      <Modal.Body>
        email: <a href="mailto:ren.xu211@gmail.com">ren.xu211@gmail.com</a>
        <br />
        github: <a href="https://github.com/xrenjie">Github</a>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;
