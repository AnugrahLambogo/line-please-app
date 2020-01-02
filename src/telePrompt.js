import React from 'react';
import './telePrompt.css';
import dummyStore from './DummyStore';


class telePrompt extends React.Component {
    state= {
      data: dummyStore,
      sectNum: 0,
      lineNum: 0,
      lineOnly: false
    };
//with the lineonly property, 
//false means we're displaying by section, true means by line

nextPart = () => {
if (this.state.lineOnly === false) {
this.setState(
  {sectNum: this.state.sectNum + 1}
);
}

else {
  this.setState(
    {lineNum: this.state.lineNum +1}
  );
}
}

lastPart = () => {
  if (this.state.lineOnly === false) {
    this.setState(
      {sectNum: this.state.sectNum - 1}
    );
    }
    
    else {
      this.setState(
        {lineNum: this.state.lineNum - 1}
      );
    }
    }


toggleLineOrSection = () => {
  this.setState(
    {lineOnly: !this.state.lineOnly}
  )
}



  displayText = (text, time, lineOrSection) => {
      let sectionKeys = Object.keys(text);
      let currentSect = sectionKeys[this.state.sectNum];
      console.log(text[currentSect]);
      let sectArr = text[currentSect];

      if (lineOrSection === 'false') {
          return (<li className="line"> {sectArr} </li>)
          }
         
      else {
        return (<li className="line"> {sectArr[this.state.lineNum]} </li>)
      }
      
  }
 
  
  render() {
        return(
        <section>
          <h2>Teleprompt Mode</h2>
          <h3 id="currentOration">Title of oration</h3>
          
          <label htmlFor="lineOrSection">Display by:</label>
          <select name ="lineOrSection" id="lineOrSection" onChange={this.toggleLineOrSection}>
            <option>Section</option>
            <option>Line</option>
            </select>
             
          <label htmlFor="displayTime">How many seconds to display:</label>
          <input type="number" name="displayTime" id="displayTime">
          </input>
          <button id="startButton">Start/Pause</button>
         
        <section className="display" > 

          <ul className="orationDisplay">  
            {this.displayText(this.state.data, 5000, this.state.lineOnly)}
          </ul>  

        </section>
        <section>
          <button id="pauseButton">Pause</button>
          <button id="backButton" onClick={this.lastPart}>back</button>
          <button id="forwardButton" onClick={this.nextPart}>next</button>
          <button id="restartButton">Restart</button>
        </section>   </section>
    );
}}

export default telePrompt;