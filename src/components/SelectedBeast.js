import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{



    
    render(){

    return(
        
        <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedAnimal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={this.props.selectedAnimal.image_url} alt={this.props.selectedAnimal.title} />
        </Modal.Body>
        <Modal.Body>{this.props.selectedAnimal.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        )
    }
}

export default SelectedBeast;