import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
import FormInfo from './FormInfo';
import data from './data.json';

class Main extends React.Component {

constructor(props){
    super(props)
    this.state={
        rederedHorns:data
    }
}

   
    renderedCard=(num)=>{
        
        
    let result;
     if (num) {
       result = data.filter(item =>{
        if(item.horns == num)
       return item;
       })
        
      //  return result;
      } else {
        
        result = data;
      }

        this.filteredArr(result)
    }

    filteredArr=(result)=>{
        this.setState({
            rederedHorns: result
        })
    }


    render(){

    return(
        <>
        <FormInfo
        renderedCard={this.renderedCard}
        />

   <CardColumns>
        {this.state.rederedHorns.map((animal)=>{
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
    </>
            
        )
    }
}

export default Main;