import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const ButtonLink = styled(Link)`
    
    background:  ${({primary}) => (primary ? '#e6731c' : "#0e0430")};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({whiteBlue}) => (whiteBlue ? '#ffffff' : "#fafafa")};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;   
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:#0e0430;
        border: 2px solid #0e0430;
    }
`