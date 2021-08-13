import React from 'react'
import './CardCompany.css'
import {Link} from 'react-router-dom';

function CardCompany(props) {
    return (
        <div className="card-company">
            <div className="card-company-head">
               <img className="cadr-company-img" src={props.image} alt={props.alt}/>
            </div>
            <Link to="" className="card-company-Link">
                {props.nom}
            </Link>
        </div> 
    )
}

export default CardCompany
 