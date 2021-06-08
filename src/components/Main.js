import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component{

   
    
    render(){

    return(
        this.props.myData.map((animal)=>{
            return(
            <HornedBeasts
           title={animal.title}
           imageUrl={animal.image_url}
           description={animal.description}
           handleTheModel={this.props.handleTheModel}
           />
            )
        })
           
            
        )
    }
}

export default Main;