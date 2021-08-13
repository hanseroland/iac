import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {RiBarChartHorizontalFill} from 'react-icons/ri'


export const Nav = styled.nav`
  height:60px;
  background: #fff;
  display:flex;
  justify-content:space-between;
  position:fixed;
  width:100%;
  z-index:100;
  //background: rgba(0,0,0,0.4) 60%;
          
`;

export const NavBtn = styled.div`
  display:flex;
  align-items:center;
  margin-right:50px;

  @media screen and (max-width: 768px){
     display: none;
   }
`
export const NavLink = css`
    color: #0e0430;
    display:flex;
    align-items:center;
    padding:0 1rem;
    height: 100%;
    cursor:pointer;
    text-decoration:none;
`;

export const Logo = styled(Link)`
    ${NavLink}
    font-size:italic;
`;

export const Navitem = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Navlinks = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover {
      color: #0e0430;
      border-radius: 4px;
      transition: all 0.2s ease-out;
    }
`;


export const MenuBars = styled(RiBarChartHorizontalFill)`
 display: none;
 color: #0e0430;
 background-color: #0e0430;

 @media screen and (max-width: 768px){
     display: block;
     color: #fff;
     height: 40px;
     width: 50px;
     cursor: pointer;
     
     padding: 0px  10px;
     margin-right: 10px;
     align-items:center;
     top: auto;
     transform: translate(-50%,25%);
   }
`;

export const NavMenu = styled.div`
   display:flex;
   align-items:center;

   @media screen and (max-width: 768px){
     display: none;
   }
`;

export const NavMenuLink = styled(Link)`
    ${NavLink}
   
    &:hover {
      color: #0e0430;
      border-radius: 4px;
      transition: all 0.2s ease-out;
    }
   
`;

