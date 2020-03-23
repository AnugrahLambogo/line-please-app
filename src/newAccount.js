import React from 'react';

const newAccount = () => {
  return (
    <section>

      <h2>Create New Account</h2>

      <form>
        <label htmlFor="userName">Your Name:</label>
        <input type="text" name="userName"></input>

        <label htmlFor="email">Email Address:</label>
        <input type="text" name="email"></input>

        <label htmlFor="password">Password:</label>
        <input type="text" name="password"></input>

        <label htmlFor="confirmPass">Confirm Password:</label>
        <input type="text" name="confirmPass"></input>

        <button type="submit">Create!</button>

      </form>


    </section>
  )
}

export default newAccount;