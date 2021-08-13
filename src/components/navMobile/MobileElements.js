import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';

export const  SidebarContainer = styled.aside`
    position:fixed;
    z-index: 110;
    width: 100%;
    height:100%;
    background:#fff;
    display: grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '100%': '0') };
    top: ${({isOpen})=> (isOpen ? '0' : '-100%')};
   

`

export const CloseIcon = styled(FaTimes)`
    color:#0e0430
`

export  const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px)
    }
`

export const SidebarWrapper = styled.div`
    color : #fff;
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color:#0e0430;
    cursor:pointer;
`

export const SideBtnWrap = styled.div`
    display:grid;
    justify-content: center;
    
`

export const SidebarRoute = styled(LinkR)`
    background:#0e0430;
    white-space: nowrap; 
    padding: 16px 54px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
    outline: none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: translateY(-2px);
    }
`

export const SidebarBtn = styled.button`
    border-radius: 50px;
    background:#fbf000;
    white-space: nowrap;
    padding: 16px 54px;
    color: #1a1359;
    font-size: 16px;
    margin-bottom: 5px;
    outline: none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fbf000;
        color: #008647;
    }
`

export const Navitem = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Navlinks = styled(LinkR)`
    color: #0e0430;
    text-decoration: none;
    padding: 0.5rem 1rem;
    

    &:hover {
      color: #0e0430;
      border-radius: 4px;
      transition: all 0.2s ease-out;
    }
`;