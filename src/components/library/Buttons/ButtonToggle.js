/*
    File Description: Creates a toggle button.
    Notes: LIBRARY component. 
*/

import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;
`;

export default function StandaloneToggleButton(props) {
  const [selected, setSelected] = React.useState(false);

  const sendButtonToggle = (selected) => {
    props.getButtonToggleState(selected)
  }

  return (
    <Wrapper>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <span onClick={() => sendButtonToggle(selected)}>{selected ? props.optionB : props.optionA}</span>
      </ToggleButton>
    </Wrapper>
  );
}