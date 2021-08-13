import styled from 'styled-components'

export const BreadSection = styled.nav`
    position: absolute;
    width: 100%;
    height: 45px;
    display:flex;
    margin-top: 60px;
    justify-content:center;
    align-items:center;
    background-color:#e9e9e9;
  //  background-color:#f9f9f9;
    top:0;

    
    /*box-shadow: 0 6px 20px rgba(10, 10, 10, 0.1);*/

@media screen and (max-width:960px){
    transition: 0.8s all ease;
}
`

export const BreadContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height:41px;
    z-index:1 ;
    width:100%;
    max-width: 1100px;
    background-color:#e9e9e9;

`

export const BreadLinks = styled.div`

    justify-self:flex-start;
    display:flex;
    align-items:center;
    color: #fff;
    

    @media screen  and (max-width:768px){
            margin-left:14px;
           
        }
`
