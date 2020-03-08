import React from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox/SearchBox';
import { BODY_COLOR, HERO_BG_COLOR } from './constants';
import './App.css';

const MainBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${BODY_COLOR};
`;

const Hero = styled.div`
  padding-bottom: 400px;
  background-color: ${HERO_BG_COLOR};
`;

function App() {
  return (
    <MainBody>
      <Hero />
      <SearchBox />
    </MainBody>
  );
}

export default App;
