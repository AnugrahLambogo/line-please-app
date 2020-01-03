import React from 'react';
import './telePrompt.css';
import dummyStore from './DummyStore';


class telePrompt extends React.Component {
    state= {
      data: dummyStore,
      sectNum: 0,
      lineNum: 0,
      lineOnly: false,
      running: false,
      time: 0,
      fullLine: true
    };
//with the lineonly property, 
//false means we're displaying by section, true means by line

nextPart = () => {
let sectionNames = Object.keys(this.state.data);
let currSect = sectionNames[this.state.sectNum]
let lineMax = this.state.data[currSect].length - 1;
let sectMax = sectionNames.length - 1;

if (this.state.sectNum === sectMax) {

}

else if (this.state.lineNum >= lineMax) {
  this.setState({
    sectNum: this.state.sectNum + 1,
    lineNum: 0,
    }
  );
}

else if (this.state.lineOnly === false) {
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
if (this.state.lineNum === 0 && this.state.sectNum === 0) {

}

else if (this.state.lineNum === 0) {
  let sectionNames = Object.keys(this.state.data);
  let prevSect = sectionNames[this.state.sectNum-1];
  let prevLineMax = this.state.data[prevSect].length - 1;
  this.setState({
    sectNum: this.state.sectNum - 1,
    lineNum: prevLineMax,
    }
  );
}
  
else if (this.state.lineOnly === false) {
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



displayText = (text, lineOrSection) => {
      let sectionKeys = Object.keys(text);
      let currentSect = sectionKeys[this.state.sectNum];
      let sectArr = text[currentSect];
      console.log(this.state.running);
      let beginningArr = sectArr.map(line => {
         let firstTwo = line.split(' ', 2);
         return firstTwo.join(' ');
      });


      if (this.state.fullLine === false && lineOrSection === false) {
        return (<li className="line"> {beginningArr.map(line => <p>{line}</p>)} </li>)
      }

      else if (this.state.fullLine === false && lineOrSection === true) {
        return <li className="line"> {beginningArr[this.state.lineNum]} </li>
      }

      else if (lineOrSection === false) {
          return (<li className="line"> {sectArr.map(line => <p>{line}</p>)} </li>)
          }
         
      else {
        return (<li className="line"> {sectArr[this.state.lineNum]} </li>)
      }
      
  }

updateTime = ({target}) => {
  this.setState({
    time: target.value * 1000
  })
}

timeDisplay = () => {
  let timeStart;
  console.log(this.state.running);

  if (this.state.running === true) {
    timeStart = setInterval(this.nextPart, this.state.time);
  }
  
  else {
    clearInterval(timeStart);
    console.log('please make it stop');
  }
 }


toggleTimer = () => {
  this.setState({
    running: !this.state.running
  });
  this.timeDisplay();
}

restart = () => {
  this.setState(
    {
      sectNum: 0,
      lineNum: 0
    }
  )
}

toggleFull = () => {
  this.setState({
    fullLine: !this.state.fullLine,
  })
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
          <input type="number" name="displayTime" id="displayTime" onChange={this.updateTime}>
          </input>
          <select name="fullOrEmpty" id="fullOrEmpty" onChange={this.toggleFull}>
            <option>Show full line</option>
            <option>Show only the beginning</option>
          </select>
          <button id="startButton" onClick={this.toggleTimer}>Start/Pause</button>
         
        <section className="display" > 

          <ul className="orationDisplay">  
            {this.displayText(this.state.data, this.state.lineOnly)}
          </ul>  

        </section>
        <section>
          <button id="pauseButton">Pause</button>
          <button id="backButton" onClick={this.lastPart}>back</button>
          <button id="forwardButton" onClick={this.nextPart}>next</button>
          <button id="restartButton" onClick={this.restart}>Restart</button>
        </section>   </section>
    );
}}

export default telePrompt;