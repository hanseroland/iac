import React from 'react';
import styled from 'styled-components';

const SectionTitreStyle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
  color: #13063f;
  p {
   
    font-size: 2rem;
  }
  h2 {
   
    font-size: 2rem;
   
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
 
export default function SectionTitre({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitreStyle className="section-title">

      <h2>{heading}</h2>
    </SectionTitreStyle>
  );
}