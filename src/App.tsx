import React from 'react';
import CollectionList from './components/CollectionList'
import './App.css';
import './reset.css';

function App(): JSX.Element {

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__h1">Explore</h1>
        <p className="header__p">Explore more than 100k amazing NFTs on Kalao marketplace and filters them at tour convenience</p>
      </header>
      <CollectionList />
    </div>
  );
}

export default App;
