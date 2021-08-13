import React, {useState} from 'react'
import Navbar from '../components/navbar'
import { GlobalStyle } from '../components/globalStyle'
import NavMobile from '../components/navMobile'
import Footer from '../components/footer/Footer'
import BreadCrumbs from '../components/Breadcrumbs'
import ScrollToTop from '../components/ScrollToTop'
import { ServiceData } from '../data/ServiceData'


const SecondLayout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop/>
            <NavMobile menuItems={ServiceData}  isOpen={isOpen}  toggle={toggle} />
            <Navbar menuItems={ServiceData} toggle={toggle}/>
            <BreadCrumbs/>
            {children}
            <Footer  menuItems={ServiceData}  />
            <GlobalStyle/>            
        </>
    )
}

export default SecondLayout
