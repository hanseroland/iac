import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
    {
      title: 'Accueil',
      path: '/',
      icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Actualités',
        path: '/actualites',
        icon: <BiIcons.BiSelectMultiple />,
    },
    {
        title: 'Services',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        subNav: [
            {
              title: 'Mode accessoires',
              path: '/detail-categorie',
              icon: <GiIcons.GiAmpleDress />,
              cName: 'sub-nav'
            },
            {
              title: 'Friperie',
              path: '/detail-categorie',
              icon: <GiIcons.GiTrousers />,
              cName: 'sub-nav'
            },
            {
              title: 'Informatique',
              path: '/detail-categorie',
              icon: <MdIcons.MdComputer />
            },
            {
              title: 'Cuisine et maison',
              path: '/detail-categorie',
              icon: <MdIcons.MdKitchen />
            }
          ]
    },
   
    {
      title: 'Projet',
      path: '/projets',
      icon: <FaIcons.FaCartPlus />
    },
   
    {
      title: 'À propos',
      path: '/apropos',
      icon: <AiIcons.AiFillSetting />,
  
      
    },
    
  ]; 