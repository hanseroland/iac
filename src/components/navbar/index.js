import React,{useState} from 'react';
import { Nav,Logo,MenuBars,NavMenu,NavMenuLink,NavBtn,Navitem,Navlinks } from './NavbarElements';
import { Button } from '../Button';
import Dropdown from './Dropdown';
import Img from '../../images/logo-iac.jpeg'

const Navbar = (props) => {

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
            <Nav> 
                <Logo to="/" >
                      <img src={Img} alt="logo iac" style={{width:"50%"}} />
                </Logo>
                <MenuBars onClick={props.toggle} />
                <NavMenu>
                    {/*menuData.map((item,index)=>(

                            <NavMenuLink key={index} to={item.link} > {item.title} </NavMenuLink>
                      ))
                    */}
                     <NavMenuLink  to="/"> Accueil </NavMenuLink>
                     <NavMenuLink  to="/savoire-faire"> Savoir-faire</NavMenuLink>
                     <NavMenuLink  to="/services"> Services</NavMenuLink>
                   {/* <Navitem
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}
                    >
                        <Navlinks to="#" >
                            Services
                            {dropdown && <Dropdown   menuItems={props.menuItems}/>}
                        </Navlinks>
                   </Navitem>*/}
                     <NavMenuLink  to="/projets"> Projets</NavMenuLink>
                     <NavMenuLink  to="/apropos"> Notre Entreprise</NavMenuLink>
                </NavMenu>  
                <NavBtn>
                    <Button to='/contact' primary="true" >
                        Contactez-nous
                    </Button>
                </NavBtn>
            </Nav>
        </>
    );
};



export default Navbar;
