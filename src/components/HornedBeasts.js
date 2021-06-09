import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            vote: 0
        }
    }


    handleClicking = () => {
        this.setState({
            vote: this.state.vote + 1
        });
    }

    handleTheModelOnHornedBeasts=()=>{
        this.props.handleTheModel(this.props.title);
    }

    render(){


        return(
           
            <Card style={{ width: '18rem' }} onClick={this.handleTheModelOnHornedBeasts}>
            <Card.Img variant="top" src="holder.js/100px180" src={this.props.imageUrl} alt={this.props.title}  onClick={this.handleClicking} />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Card.Text>
            🌹 number of pets 🌹:{this.state.vote}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        )
    }
}

export default HornedBeasts;