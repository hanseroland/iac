import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconContext } from 'react-icons/lib';


const NotFound = styled.div`
 
  height: 100vh;
  max-width: 100%;
  background: #1a1359;
  text-align: center;
`

const NotFoundContainer = styled.div`
   align-items:center;
   justify-content:center;
   padding: 6rem;
`
const H3 = styled.h3`
    margin-bottom: 3rem;
    font-size: 2rem;
    color:#fff;

`

const Span = styled.span`
 color:#fff;
 margin-left: 5px;
 font-size: 1rem;
`

const HomeLink = styled(NavLink)`
    padding: 1rem 2rem;
    border-radius: 10px;
    background: #008647;
    transition: .2s;
    text-decoration:none;
`


const Erreur = () => {
    return (
        <IconContext.Provider value={{color:'#fff',  size: 25 }}>
        <NotFound>
            <NotFoundContainer>
                <H3>Désolé cette page n'existe pas !</H3>
                <HomeLink exact to="/" >
                    <FaHome/> <Span>Accueil</Span>
                </HomeLink>
            </NotFoundContainer>
        </NotFound>
        </IconContext.Provider>
    )
}

export default Erreur