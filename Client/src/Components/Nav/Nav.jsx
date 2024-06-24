import React from 'react'
import './nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Searcbox from './Searcbox';



function Nav() {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        <a>
         <MenuIcon sx={{color: 'black'}} /> 
        </a>
        <LightbulbOutlinedIcon sx={{ color: 'orange', 'marginLeft':'1rem', 'fontSize':'1.7rem'}} />
        <h3 className='Brand-name'>Keep</h3>
      </div>
      <div className='Searcharea'>      
            <Searcbox /> 
      </div>
      

      <div className='rightnav'>
      
        <a>  <RestartAltIcon />   </a>
        <button className='mode-change'> 
          <DarkModeIcon sx={{ color: 'orange', 'fontSize':'25px' }} />   
        </button>
        <div className='user-icon'>
          <h2>Y</h2>
        </div>
      </div>
        
    </div>
  )
}

export default Nav