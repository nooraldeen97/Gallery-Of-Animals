import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';


class Main extends React.Component{


    
    render(){

    return(
        data.map((animal)=>{
            return(
            <HornedBeasts
           title={animal.title}
           imageUrl={animal.image_url}
           description={animal.description}
           />
            )
        })
           
            
        )
    }
}

export default Main;