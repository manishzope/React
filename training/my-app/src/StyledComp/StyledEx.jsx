import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: maroon;
`;

const Wrapper = styled.section`
  padding: 5em;
  background: aqua;
`;

export default function MyHelloWorld() {
  return (
    <Wrapper>
      <Title>Hello world!!!</Title>
    </Wrapper>
  );
}
