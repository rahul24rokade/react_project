import React, {Component} from 'react';
import "./App.css"
import Form from './Form';
import Ticker from './Ticker';
import Reaction from './Reactions/Reaction';
import Emoji from './Emoji/Emoji';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Rahul from './Component/Rahul';
class App extends React.Component{
  render(){
  return (
    
    <Router>
    
     <Route path="/" exact component={Form}/> 
     <Route path="/ticker" exact component={Ticker}/> 
     <Route path="/reaction" exact component={Reaction}/>
     <Route path="/emoji" exact component={Emoji}/>
     <Route path="/Rahul" exact component={Rahul}/>
    </Router>
    
    );
  }
  }
  
export default App;
