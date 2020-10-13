import React, {Component} from 'react'


class Button extends Component{
    state = {
        value : ""
        
}; 
onChange = e =>{
        this.setState({value : e.target.value})
}   
render(){
    const {value} = this.state;
    const {quesLabel} = this.props;
    return(
        <div class= "Button">
            <h3>{quesLabel}</h3>
            <div class= "radio">
                <input type="radio" 
                       value="Agree"
                       checked={value === "Agree"}
                       onChange={this.onChange}/>
                     <label>Agree</label>
                     <br/>
            
                <input type="radio"
                       value="Disagree"
                       checked={value === "Disagree"}
                       onChange={this.onChange}/>
                       <label>Disagree </label>
         </div>
        </div>
    )
}
}
export default Button
