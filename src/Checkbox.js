import React, { Component } from 'react';

class Checkbox extends Component{
    state={
        value: ""
    }
    onChange= e =>{
        this.setState({value: e.target.value})
    }

    render(){
        const {value}= this.state;
        const {quesLabel} = this.props

        return(
                  <div class="CheckBox"> 
                   <h3> {quesLabel} </h3>
                   
                   <div class="check"> 
                    <input type="checkbox" 
                    value='YES'
                    checked={value==="YES"}
                    onChange={this.onChange}/>
                     <label>Yes</label><br/>
                
                    <input type="checkbox"
                     value='NO'
                     checked={value==="NO"}
                         onChange={this.onChange}/>
                         <label>No</label> <br/>
                    
                     <input type="checkbox"
                     value='NOT SURE'
                     checked={value==="NOT SURE"}
                     onChange={this.onChange}/>
                    <label>Not Sure</label> 
                      </div>
                      </div>

        )
    
        }
}
export default Checkbox