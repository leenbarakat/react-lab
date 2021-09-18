import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
  render() {
    const mystyle = {
        width: '600px',
        height: '500px',
    };
    return (
      <> 
        <Modal
            size='lg'
            show={this.props.showModal}
            onHide={this.props.handleClose}
            aria-labelledby='example-modal-sizes-title-lg'
        >
          <Modal.Header closeButton>
              <Modal.Title id='example-custom-modal-styling-title'>
                  {this.props.name}
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img
                  src={this.props.image_url}
                  alt={this.props.name}
                  style={mystyle}
              />
              <br />
              {this.props.description}
          </Modal.Body>
          <Modal.Footer>
              <Button variant='secondary' onClick={this.props.handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;