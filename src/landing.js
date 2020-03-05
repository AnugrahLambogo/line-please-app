import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
    return (
       <div id="landing" >
           <h3>Welcome to Line Please!</h3>
           <p>Do you need to memorize anything? <br/>
            Line Please helps users commit any blocks of text into memory!
            Using a teleprompt-like tool, you can have your text be displayed
            in chronological order as you recite and memorize it to heart.<br/><br/>
            As you become more familiar with your text, you can make it only show 
            the first two words of each line--prompting you to recall the rest of the line.
            </p>
           <p> Line Please is perfect for:
            <br/><br/>
            Speeches<br/>
            Monologues<br/>
            Poetry<br/>
            Words to a song<br/>
            Speaking to your boss/significant other/crush/etc.<br/>
            <br/>
            Hit <Link to='/upload' className="link">Upload new</Link> to upload your text and start practicing! 
            </p>

            <h3>Happy Memorizing!</h3>
       </div>
    )
}

export default landing;