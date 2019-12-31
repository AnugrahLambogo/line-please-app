import React from 'react';
import './telePrompt.css';

class telePrompt extends React.Component {
    state= {};

    render() {
        return(
        <section>
          <h2>Teleprompt Mode</h2>
          <h3 id="currentOration">Title of oration</h3>
          
          <label for="lineOrSection">Display by:</label>
          <select name ="lineOrSection" id="lineOrSection">
            <option>Section</option>
            <option>Line</option>
            </select>
             
          <label for="displayTime">How many seconds to display:</label>
          <input type="number" name="displayTime" id="displayTime">
          </input>
         
        <section className="display" > 

       {/*The text displayer will need to be it's own module -->*/}
          <ul className="orationDisplay">  
            <li className="line"> Lorem ipsum etc. etc.</li>
            <li className="line"> second line lorem ipsu, </li>
            <li className="line"> third line lorem impsum </li>
          </ul>  
        </section>
        <section>
          <button id="pauseButton">Pause</button>
          <button id="backButton">back</button>
          <button id="forwardButton">next</button>
          <button id="restartButton">Restart</button>
        </section>   </section>
    );
}}

export default telePrompt;