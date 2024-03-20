import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import AvgCalci from './Component/AvgCalci';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
      </header>
      <main>
        <AvgCalci />
      </main>
    </div>
  );
}

export default App;

