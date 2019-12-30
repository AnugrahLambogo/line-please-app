import React from 'react';

const newAccount = () => {
    return (
        <section>
          
          <h2>Create New Account</h2>

        <form>
          <label for="userName">Your Name:</label>
          <input type="text" name="userName"></input>
          
          <label for="email">Email Address:</label>
          <input type="text" name="email"></input>
         
          <label for="password">Password:</label>
          <input type="text" name="password"></input>
          
          <label for="confirmPass">Confirm Password:</label>
          <input type="text" name="confirmPass"></input>
        
          <button type="submit">Create!</button>

        </form>


        </section>
    )
}

export default newAccount;