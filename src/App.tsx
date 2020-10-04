import React from "react";
import { Radio } from "antd";
import * as Styled from "./App.styles";

const { Group, Button } = Radio;
const TYPES = {
  OBJECTS: "OBJECTS",
  ARRAYS: "ARRAYS",
  RESPONSIBILITIES: "RESPONSIBILITIES",
  REPEATS: "REPEATS",
  COMPONENTS: "COMPONENTS",
};

const App = () => {
  const onChange = (value: any) => {
    console.log(value);
  };

  return (
    <Styled.Container>
      <Styled.Header>SF Front</Styled.Header>
      <Styled.Main>
        <Group
          onChange={onChange}
          defaultValue={TYPES.OBJECTS}
          buttonStyle="solid"
        >
          <Button value={TYPES.OBJECTS}>Obiekt</Button>
          <Button value={TYPES.ARRAYS}>Tablice</Button>
          <Button value={TYPES.RESPONSIBILITIES}>Odpowiedzialności</Button>
          <Button value={TYPES.REPEATS}>Powtórzenia</Button>
          <Button value={TYPES.COMPONENTS}>Komponenty</Button>
        </Group>
      </Styled.Main>
    </Styled.Container>
  );
};

export default App;
