// import React, {useState} from 'react'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'

// class Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
      // {/* <Button variant="primary" onClick={handleShow}>
      //   Launch demo modal
      // </Button>

      // <Modal show={show} onHide={handleClose}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Modal heading</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //     <Button variant="primary" onClick={handleClose}>
      //       Save Changes
      //     </Button>
      //   </Modal.Footer>
      // </Modal> */}
//       <p></p>
//     </>
//   );
// }

// export default Example;

import React, { Component } from 'react'
export default class Alerta extends Component {
  render() {
    return (
      <div>
         <>
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
      </div>
    )
  }
}
