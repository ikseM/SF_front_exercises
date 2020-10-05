import React, { useState } from 'react';
import { Radio } from 'antd';
import * as Styled from './App.styles';
import { RadioChangeEvent } from 'antd/es/radio';

import Destructuring from './exercises/Destructuring/Destructuring';
import Responsibilities from './exercises/Responsibilities/Responsibilities';
import Repeats from './exercises/Repeats/Repeats';
import leeroy from './commons/leeroy.png';

const { Group, Button } = Radio;
const TYPES = {
  DESTRUCTURING: 'DESTRUCTURING',
  RESPONSIBILITIES: 'RESPONSIBILITIES',
  REPEATS: 'REPEATS'
};

const App = () => {
  const [type, setType] = useState(TYPES.REPEATS);
  const onChange = (event: RadioChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <Styled.Container>
      <Styled.Header>SF Front</Styled.Header>
      <Styled.RadioContainer>
        <Group value={type} onChange={onChange} buttonStyle="solid">
          <Button value={TYPES.DESTRUCTURING}>Destrukturyzacja</Button>
          <Button value={TYPES.RESPONSIBILITIES}>Odpowiedzialności</Button>
          <Button value={TYPES.REPEATS}>Powtórzenia</Button>
        </Group>
      </Styled.RadioContainer>
      <Styled.Components>
        <Destructuring
          isVisible={type === TYPES.DESTRUCTURING}
          avatar={leeroy}
          nick={'Leeroy'}
          title={'Jenkins'}
          lastLogin={'24.02.1998'}
          status={true}
        />
        <Responsibilities isVisible={type === TYPES.RESPONSIBILITIES} />
        <Repeats isVisible={type === TYPES.REPEATS} />
      </Styled.Components>
    </Styled.Container>
  );
};

export default App;
