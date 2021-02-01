import React from 'react';
import * as Styled from './App.styles';
import Repeats from './exercises/Repeats/Repeats';

const App = () => {

  return (
    <Styled.Container>
      <Styled.Header>SF Front</Styled.Header>
      <Styled.Components>
        <Repeats />
      </Styled.Components>
    </Styled.Container>
  );
};

export default App;
