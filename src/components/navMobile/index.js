import React,{useState} from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    Navitem,
    Navlinks 
    
} from './MobileElements'
import Dropdown from '../navbar/Dropdown';


const NavMobile = (props) => {
   

   
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };


    return (
        <>
            <SidebarContainer isOpen={props.isOpen}  onClick={props.toggle} >
                <Icon onClick={props.toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    {/*menuData.map((item,index)=>(
                        <SidebarLink key={index} onClick={toggle} to={item.link} > {item.title} </SidebarLink>
                        ))
                    */}
                     <SidebarLink  to="/" > Accueil </SidebarLink>
                     <SidebarLink  to="/savoire-faire" > Savoire-faire</SidebarLink>
                     <SidebarLink  to="/services" > Services</SidebarLink>
                    {/*<SidebarLink
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}
                         to="#"
                    >
                        <Navlinks to="#" >
                            Services
                            {dropdown && <Dropdown   menuItems={props.menuItems}/>}
                        </Navlinks>
                    </SidebarLink>*/}
                     <SidebarLink  to="/projets" > Projets</SidebarLink>
                     <SidebarLink  to="/apropos" > À propos</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap> 

                   
                        <SidebarRoute to="/contact" onClick={props.toggle} >Contactez-nous</SidebarRoute>
                    
                   
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default NavMobile
