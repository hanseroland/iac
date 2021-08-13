import { Typography } from '@material-ui/core'
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards(props) {

    const {data,lien} = props

    return (
        <div className='cards'>
          
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                      {data.map((item,index) => (
                        <CardItem
                                key={index}
                                src={item.image}
                                text={item.subtitre}
                                label={item.titre}
                                path={'/'+`${lien}`+'/' + item._id}
                        />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
