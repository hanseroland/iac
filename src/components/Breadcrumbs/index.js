import React from 'react'
import Bread from './Bread'

import { 
        BreadContainer, 
        BreadLinks, 
        BreadSection, 
       
} from './BreadElements'

const BreadCrumbs = () => {

        
    return (
        <BreadSection>
             <BreadContainer>
                 <BreadLinks>
                    <Bread/>
                 </BreadLinks>
             </BreadContainer>
        </BreadSection>
    )
}

export default BreadCrumbs
