import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({title, icon, href,onClick}) => {
  return (
    <NavLink onClick={onClick} to={href} className='flex items-center gap-2 text-xl font-medium duration-300
     hover:text-yellow-600 px-2 py-4 rounded-lg'>
        {icon}
        <span>{title}</span>
    </NavLink>
  )
}

export default SidebarItem