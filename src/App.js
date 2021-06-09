import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      myData : data,
      show : false ,
      selectedAnimal:{}
    }
  }

  handleTheModel=(title)=>{
    let foundObj = data.find(element => {      
      if (element.title === title) {
                return element;
                
              }})
    this.setState({
      show : true,
      selectedAnimal:foundObj
    })
  }

  handleClose=()=>{
    this.setState({
      show : false 
    })
  }

  render(){
    return(
      <>
      <Header/>
      <SelectedBeast
      selectedAnimal={this.state.selectedAnimal}
      myData={this.state.myData}
      show ={this.state.show}
      handleClose={this.handleClose}
      />
      <Main
      myData={this.state.myData}
      handleTheModel={this.handleTheModel}
      
      />
      <Footer/>
      </>
    )
  }
}

export default App;