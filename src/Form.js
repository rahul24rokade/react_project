import React, { Component } from 'react'
import "./Form.css";
import Button from './Button';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            pollingCheckbox: 'Yes',
            pollingDropdown: 'Yes',
            pollingButton: 'Yes'
        }
    }
    mySubmitHandler = event => {
        const {username} = this.state;
           alert("THANKS FOR SUBMITTING! " +username);}
    
    render(){
        const {value}=this.state;
              return(
                <div class="Form">
                <h1>TODAY'S POLL</h1>
                <h2>EXPERIENCE POLL</h2>
                <Button quesLabel = '1: Civil aviation minister Hardeep Singh Puri says that government should not be running airports and airlines. ?'/>
                <Checkbox quesLabel = '2: Do you think it is a good move by states to reserve government jobs for locals ?'/>
                <Dropdown quesLabel= '3:Have you used this program/app before?'/>
          
        <form onSubmit={this.mySubmitHandler}>
                      <button type='submit'>Submit</button>
               </form>
          </div>
        )
    }
}
export default Form;