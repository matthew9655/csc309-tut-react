import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FruitModal(props) {

  return (
    <>
      <Modal show={props.showModal} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Oh no!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This fruit does not exist in the database.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FruitModal;