import React, {useState} from 'react';
import { Button , Modal , Form} from 'react-bootstrap';
import newm from '../Assets/newm.jpeg';

const AddModal = ({AddMovie}) => {

    const [show, setShow] = useState(false);
    const [Title, setTitle] = useState("");
    const [rate, setRate] = useState(1);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-dark" onClick={handleShow}>
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter movie title" 
    onChange={(e)=> setTitle(e.target.value)}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Rate</Form.Label>
    <Form.Control type="number" 
    placeholder="Enter movie rate" min="1" max="5"
    onChange={(e) => setRate(e.target.value)}
    />
    
  </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={() => { AddMovie({Id: Math.random(), Title , Image:newm , rate  }); handleClose()}}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  

  export default AddModal