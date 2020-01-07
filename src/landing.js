import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {

    return (
        <section>
        <button>Log in</button>
        <button>Create Account</button>
        <Link to='/teleprompt'><button>Start Practicing</button></Link> 
        <Link to='/upload'><button>Upload New</button></Link>
        <Link to='/listText'><button>View/Delete Texts</button></Link>
        </section>
    )
}

export default landing;