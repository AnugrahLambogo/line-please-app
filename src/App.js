import React from 'react';
import uploadNew from './uploadNew';
import landing from './landing';
import newAccount from './newAccount';
import { Route } from 'react-router-dom'

class App extends React.Component {
  render(){

  return (
    <main className='App'>
    <header role="banner">
            <h1>Line Please!</h1>
             <p>Making sure you know your words</p>
    </header>
    <Route path='/' component={landing} />
    <Route path='/new-account' component={newAccount} />
    <Route path='/upload' component={uploadNew} />

    </main>
  );
}
}

export default App;