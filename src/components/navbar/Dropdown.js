import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const {menuItems} = props;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="dropdown-link"
                to={'/services/'+`${item._id}`}
                onClick={() => setClick(false)}
              >
                {item.titre}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;