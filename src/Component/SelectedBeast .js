import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {


    render ()
    {


            return(
             

                <Modal show={this.props.show} onHide={this.props.handleClose} className="Modal">

                <Modal.Header closeButton>

                  <Modal.Title>{dataClicked.title</Modal.Title>

                </Modal.Header>




                <Modal.Body>

          <Card.Img variant="top" src={this.props.dataClicked.image_url}  alt={this.props.dataClicked.title} className='img'/>


          <Card.Text > {dataClicked.description} </Card.Text>



              </Modal.Body>

                <Modal.Footer> <Button  onClick={this.props.handleClose} variant="secondary" > LOSE </Button>  </Modal.Footer>

              </Modal>

            )
        
     }
}

export default SelectedBeast;