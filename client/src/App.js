import React from 'react';

import Posts from './pages/Posts';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Posts />
        </div>
      </main>
    );
  }
}

export default App;
