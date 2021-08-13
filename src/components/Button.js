import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#0e0430':'#e6731c')};
    white-space:nowrap;
    outline:none;
    border:none;
    min-width:100px;
    max-width:200px;
    cursor:pointer;
    text-decoration:none;
    transition:0.3s;
    justify-content:center;
    align-items:center;
    padding:${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#0e0430') };
    font-size:${({big}) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
        background: ${({primary}) => (primary ? '#fff':'#fff')};
        color: ${({primary}) => (primary ? '#0e0430' : '#0e0430') };
        border: 2px solid #0e0430;
    }
`

