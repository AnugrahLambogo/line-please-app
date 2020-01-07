import React from 'react';
import './uploadNew.css';


class uploadNew extends React.Component {
state = {
numOfSections: 3,
title: '',
};

createSectionArrays = ({ target }) => {
    console.log("this function just ran!");
    let sectionArray = target.value.split("\n");
    this.setState(
        {[target.name]: sectionArray}
    );
    console.log(this.state);
}

sendText = (e) => {
  e.preventDefault();
  const uploadText = this.state
  
  fetch('http://localhost:8000/upload', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(uploadText)
  })
}


renderSections = () => {
return (
Array.from({length: this.state.numOfSections})
     .map((e, index) => (
              <section>        
              <label htmlFor={'section'+(index+1)}> Section {index + 1}:</label>
              <textarea
              type="text" 
              name={'section'+(index+1)}
              className="sections"
              onChange={this.createSectionArrays}>
              </textarea>
              </section>    
)))}

increaseSection = (e) => {
  e.preventDefault();
  this.setState({numOfSections: this.state.numOfSections +1});
}

decreaseSection = (e) => {
  e.preventDefault();
  this.setState({numOfSections: this.state.numOfSections -1});
}


render(){
    return (
        <section>
          <h3>Upload new oration</h3>
          <p>Write or copy/paste the text you want to memorize below. Separate your text by 'sections' as you see fit, and make sure each 'line' is separated by an enter/return. 
          </p>

          <form onSubmit={this.sendText}>
            <label htmlFor="textTitle">Title:</label>
            <input id="textTitle" type="text" onChange={e => this.setState({title: e.target.value})}></input>
            
            {this.renderSections()} 
  
            <button id="addSection" onClick={this.increaseSection}>Add another section</button>
            <button id="subtractSection" onClick={this.decreaseSection}>Remove section</button>
            <button type="submit" >Create!</button>
            </form>
        </section>
    );
  }}


export default uploadNew;