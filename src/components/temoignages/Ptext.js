import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.4rem;
  line-height: 1em;
  text-align: justify;
  
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Ptext({ children }) {
  return (
    <PStyle className="para">
      <p  style={{textAlign:"justify"}} >{children}</p>
    </PStyle>
  );
}