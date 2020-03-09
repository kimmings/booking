import React from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import { MainBody, Hero } from './constants/styles';

function App() {
  return (
    <MainBody>
      <Hero />
      <SearchBox />
    </MainBody>
  );
}

export default App;
