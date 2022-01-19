import React from 'react';
import styled from '@emotion/styled';

const Divider = ({ title }) => (
  <DividerElem>
    <Bar>
      <Title>{title}</Title>
    </Bar>
  </DividerElem>
);

const DividerElem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  margin: 20px;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  height: 1px;
  display: flex;
`;

const Title = styled.div`
  background-color: white;
  padding: 0 30px;
  align-self: center;
`;

export default Divider;
