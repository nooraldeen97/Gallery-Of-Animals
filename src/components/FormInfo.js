import React from 'react';
import Form from 'react-bootstrap/Form'



class FormInfo extends React.Component{


    renderedCardFromForm=(event)=>{
        this.props.renderedCard(parseInt(event.target.value))
    }



    render(){
        return(
            <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>select the number of horns 🦌:</Form.Label>
            <Form.Control  onChange={this.renderedCardFromForm} as="select" custom>
            <option value=''>all</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>Woow</option>
            </Form.Control>
        </Form.Group>
        </Form>
        )
    }
}


export default FormInfo;