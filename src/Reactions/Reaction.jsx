import React, { Component } from 'react';
import "./Reaction.css";

class Reaction extends Component{
    render(){
        return(
           <div>
               
    <h1 class="main-title">Facebook Reactions only CSS</h1>

   <div class="box"/>
  <input type="checkbox" id="like" class="field-reactions"/>
  <label for="like" class="label-reactions">Like</label>
  <span class="text-desc">Press space and after tab key to navigation</span>
  <div class="toolbox"></div>
  <label class="overlay" for="like"></label>

  <button onClick={() => console.log('like')} class="reaction-like"><span class="legend-reaction">Like</span></button>
  <button onClick={() => console.log('love')} class="reaction-love"><span class="legend-reaction">Love</span></button>
  <button onClick={() => console.log('haha')} class="reaction-haha"><span class="legend-reaction">Haha</span></button>
  <button onClick={() => console.log('wow')} class="reaction-wow"><span class="legend-reaction">Wow</span></button>
  <button onClick={() => console.log('sad')} class="reaction-sad"><span class="legend-reaction">Sad</span></button>
  <button onClick={() => console.log('angry')} class="reaction-angry"><span class="legend-reaction">Angry</span></button>
   </div>

        )
}
}
   export default Reaction;