import config from './config';
import React from 'react';
import './styling/telePrompt.css';
import dummyStore from './DummyStore';

class telePrompt extends React.Component {
    state= {
      data: dummyStore,
      sectNum: 0,
      lineNum: 0,
      lineOnly: false,
      running: false,
      time: 0,
      fullLine: true,
      chosenText: '',
      textTitles: [],
      theEnd: false,
    };
//with the lineonly property, 
//false means we're displaying by section, true means by line

changeText = (e) => {
  e.preventDefault();
  const baseURL = `${config.API_ENDPOINT}/teleprompt`;
  const query = `text=${this.state.chosenText}`;

  const url = `${baseURL}/?${query}`;
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error (res.statusText);
      }
      return res.json();
    })
    .then(textData => {
      this.setState({
        data: textData,
      });
    })
    .catch(err => {
      this.setState({
        error: 'Sorry could not find that',
      });
    })
}

chooseText = (e) => {
  this.setState({
    chosenText: e.target.value,
  })
} 

getTitleNames = () => {
  const URL = `${config.API_ENDPOINT}/textTitles`;

  fetch(URL)
    .then(res => {
      if (!res.ok) {
        throw new Error (res.statusText);
      }
      return res.json();
    })
    .then(titles => {
      this.setState({
        textTitles: titles,
      });
    })
    .catch(err => {
      this.setState({
        error: 'Sorry could not find that',
      });
    })

}

displayTitleNamesAsOptions = (titles) => {

  return (
    titles.map(titleObj => <option>{titleObj.title}</option>)
   
  )}





nextPart = () => {
let sectionNames = Object.keys(this.state.data);
let currSect = sectionNames[this.state.sectNum]
let lineMax = this.state.data[currSect].length - 1;
let sectMax = sectionNames.length - 1;

if (this.state.lineOnly === false && this.state.sectNum === sectMax) {
  this.setState(
    {theEnd: true}
  )
}

else if (this.state.lineNum === lineMax && this.state.sectNum === sectMax) {
  this.setState(
    {theEnd: true}
  )
}

else if (this.state.sectNum === sectMax && this.state.lineOnly === true) {
  this.setState(
    {lineNum: this.state.lineNum +1}
  );
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
      let beginningArr = sectArr.map(line => {
         let firstTwo = line.split(' ', 2);
         return firstTwo.join(' ');
      });

      if (this.state.theEnd === true) {
        return (<li>THE END</li>)
      }
      else if (this.state.fullLine === false && lineOrSection === false) {
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

  if (this.state.running === false) {
    this.timeStart = setInterval(this.nextPart, this.state.time);
  }
  
  else {
    clearInterval(this.timeStart);
  }
 }


toggleTimer = (e) => {
  e.preventDefault();
  this.setState({
    running: !this.state.running
  });
  this.timeDisplay();
}

restart = () => {
  this.setState(
    {
      sectNum: 0,
      lineNum: 0,
      theEnd: false,
    }
  )
}

toggleFull = () => {
  this.setState({
    fullLine: !this.state.fullLine,
  })
}
 
componentDidMount () {
  this.getTitleNames();
}
 
  
render() {


        return(
        <section>
          <h2 id="currentText">{this.state.chosenText}</h2>
          
          <form onSubmit={e => this.changeText(e)}>
          <label htmlFor="chooseText">Switch text:</label>
          <select name="chooseText" id="chooseText" onChange={this.chooseText}>
            <option>-Select Text-</option>
            {this.displayTitleNamesAsOptions(this.state.textTitles)}
          </select>
          <button type="submit">Switch!</button>
          </form>
          
          <form>
          <label htmlFor="lineOrSection">Display by:</label>
          <select name ="lineOrSection" id="lineOrSection" onChange={this.toggleLineOrSection}>
            <option>Section</option>
            <option>Line</option>
            </select>
          </form>
          
          <form>
          <label htmlFor="displayTime">How many seconds to display:</label>
          <input type="number" name="displayTime" id="displayTime" onChange={this.updateTime}>
          </input>
          </form>

          <form>
          <select name="fullOrEmpty" id="fullOrEmpty" onChange={this.toggleFull}>
            <option>Show full line</option>
            <option>Show only the beginning</option>
          </select>
          <button id="startButton" onClick={e => this.toggleTimer(e) }>Start/Pause</button>
          </form>

        <section className="display" > 

          <ul className="orationDisplay">  
            {this.displayText(this.state.data, this.state.lineOnly)}
          </ul>  

        </section>
        <section>
          <button className="teleButton" onClick={this.lastPart}>back</button>
          <button className="teleButton" onClick={this.nextPart}>next</button>
          <button className="teleButton" onClick={this.restart}>Restart</button>
        </section>   </section>
    );
}}

export default telePrompt