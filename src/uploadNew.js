import React from 'react';
import './uploadNew.css'

const uploadNew = () => {
    return (
        <section>
          <h3>Upload new oration</h3>
          <p>Write or copy/paste the text you want to memorize below. Separate your text by 'sections' as you see fit, and make sure each 'line' is separated by an enter/return. 
          </p>

          <form>
            <label for="section1">Section 1:</label>
            <input type="text" name="section1" class="sections"></input>

             <label for="section2">Section 2:</label>
            <input type="text" name="section2" class="sections"></input>

             <label for="section3">Section 3:</label>
            <input type="text" name="section3" class="sections"></input>

             <label for="section4">Section 4:</label>
            <input type="text" name="section4" class="sections"></input>

            <button id="addSection">Add another section</button>
            <button type="submit">Create!</button>
            </form>
        </section>
    );
}

export default uploadNew;