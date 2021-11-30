import React, { Fragment }from 'react';
import './App.css';
import ListResults from './components/ListResults';

//components

import InputResult from './components/InputResult';

function App() {
  return (
    <Fragment> 
      <div className="container">
        <InputResult />
        <ListResults />
      </div>
    </Fragment>
  )
}

export default App;
