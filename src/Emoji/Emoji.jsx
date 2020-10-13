import React, {Component} from "react";
import './Emoji.css';
import clap from './clap.png';




class Emoji extends Component{
  render() {
    return (
      <div>
         <h1 className="intro">
    facebook emoji
  </h1>
  <div className="box">
    <div className="Like">
      <a className="Like__link js-hover">
        Like 
      </a>
      <div className="Emojis">
        <div className="Emoji Emoji--clap">
          <div className="icon icon--clap" />
         
        </div>
        <div className="Emoji Emoji--like">
          <div className="icon icon--like" />
        </div>
        <div className="Emoji Emoji--dislike">
          <div className="icon icon--dislike" />
        </div>
        <div className="Emoji Emoji--smile">
          <div className="icon icon--smile" />
        </div>
        <div className="Emoji Emoji--sad">
          <div className="icon icon--sad" />
        </div>
      </div>
    </div>
  </div>
</div>);
  }
};

export default Emoji;