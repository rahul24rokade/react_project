import React, {Component} from 'react';
import "./Ticker.css"


class Ticker extends Component{
    render(){
        return (
            <div className= "Ticker">
                 
            <div class="ticker-wrap">
            <div class="ticker">
              <div class="__item">THIS IS MY TICKER.</div>
              <div class="__item">In this ticker any content can be added and made chenges accordingly</div>
              <div class="__item">Any content can be added in this area as per the requirements</div>
              <div class="__item">Gluten-free mumblecore chambray mixtape food truck. </div>
             
            </div>
            </div>
        </div>
        );

    }
}
export default Ticker