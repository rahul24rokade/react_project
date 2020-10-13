import React, { Component } from 'react'

class Dropdown extends Component{
    state={
        value: ""
    };

    onChange = e =>{
        this.setState({value: e.target.value}); 
    }
    render(){
        const{value}= this.state;
        const{quesLabel} = this.props

        return(
            <div>
                <div class="Dropdown"/>
                <h3>{quesLabel}</h3>
                <select id="options" 
                value={value} onChange={this.onChange}>
                    <option value="Option 1" > Yes, I am a power user</option>
                    <option value="Option 2" > Yes, but only a little</option>
                    <option value="Option 3" > I’ve only seen others use it</option>
                    <option value="Option 4" > I’ve never used or seen the program/application</option>
                    </select>
                    </div>
        )
    }
}
export default Dropdown