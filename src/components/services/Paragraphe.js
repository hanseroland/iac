import React from 'react'
import styled from 'styled-components'

const ParagrapheSection = styled.div`
       padding: 1rem;
       background: #fff;
       margin-bottom: 20px;
`;

const ParagrapheContainer = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;
      max-width: 1320px;
      width: 90%;
      margin: 0 auto;
`;

const ParagrapheWrapper = styled.p`
      // position: relative;
       //margin: 20px 0 15px;
       text-align: justify;
       margin: 0 1em 0 1em;
`;

function Paragraphe(props) {
    return (
       <ParagrapheSection>
           <ParagrapheContainer>
               <ParagrapheWrapper>
                   {props.contenu}
               </ParagrapheWrapper>
           </ParagrapheContainer>
       </ParagrapheSection>
    )
}

export default Paragraphe
