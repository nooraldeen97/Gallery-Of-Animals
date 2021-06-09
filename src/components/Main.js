import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

   
    
    render(){

    return(

   <CardColumns>
        {this.props.myData.map((animal)=>{
            return(
            <HornedBeasts
           title={animal.title}
           imageUrl={animal.image_url}
           description={animal.description}
           handleTheModel={this.props.handleTheModel}
           />
            )
        })}
    </CardColumns>
            
        )
    }
}

export default Main;