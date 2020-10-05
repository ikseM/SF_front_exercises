import React, { useState } from 'react';
import { Radio } from 'antd';
import * as Styled from './App.styles';
import { RadioChangeEvent } from 'antd/es/radio';

import Destructuring from './exercises/Destructuring/Destructuring';
import avatar from './commons/avatar.png';

const { Group, Button } = Radio;
const TYPES = {
  DESTRUCTURING: 'DESTRUCTURING',
  RESPONSIBILITIES: 'RESPONSIBILITIES',
  REPEATS: 'REPEATS',
  COMPONENTS: 'COMPONENTS'
};

const App = () => {
  const [type, setType] = useState(TYPES.DESTRUCTURING);
  const onChange = (event: RadioChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <Styled.Container>
      <Styled.Header>SF Front</Styled.Header>
      <Styled.RadioContainer>
        <Group
          onChange={onChange}
          defaultValue={TYPES.DESTRUCTURING}
          buttonStyle="solid"
        >
          <Button value={TYPES.DESTRUCTURING}>Destrukturyzacja</Button>
          <Button value={TYPES.RESPONSIBILITIES}>Odpowiedzialności</Button>
          <Button value={TYPES.REPEATS}>Powtórzenia</Button>
          <Button value={TYPES.COMPONENTS}>Komponenty</Button>
        </Group>
      </Styled.RadioContainer>
      <Styled.Components>
        <Destructuring
          isVisible={type === TYPES.DESTRUCTURING}
          avatar={avatar}
          nick={'Leeroy'}
          title={'Jenkins'}
          lastLogin={'24.02.1998'}
          status={false}
        />
      </Styled.Components>
    </Styled.Container>
  );
};

export default App;
