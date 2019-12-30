import React from 'react';
import './uploadNew.css';


class uploadNew extends React.Component {
state = {};

createSectionArrays = ({ target }) => {
    console.log("this function just ran!");
    let sectionArray = target.value.split("\n");
    this.setState(
        {[target.name]: sectionArray}
    );
    console.log(this.state);
}

render(){
    return (
        <section>
          <h3>Upload new oration</h3>
          <p>Write or copy/paste the text you want to memorize below. Separate your text by 'sections' as you see fit, and make sure each 'line' is separated by an enter/return. 
          </p>

          <form>
            <label htmlFor="section1">Section 1:</label>
            <textarea
            type="text" 
            name="section1" 
            className="sections"
            onChange={this.createSectionArrays}></textarea>

            <label htmlFor="section2">Section 2:</label>
            <textarea
            type="text" 
            name="section2" 
            className="sections"
            onChange={this.createSectionArrays}></textarea>

            <label htmlFor="section3">Section 3:</label>
            <textarea
            type="text" 
            name="section3" 
            className="sections"
            onChange={this.createSectionArrays}></textarea>

            <label htmlFor="section4">Section 4:</label>
            <textarea
            type="text" 
            name="section4" 
            className="sections"
            onChange={this.createSectionArrays}></textarea>

            <button id="addSection">Add another section</button>
            <button type="submit" >Create!</button>
            </form>
        </section>
    );
  }}


export default uploadNew;