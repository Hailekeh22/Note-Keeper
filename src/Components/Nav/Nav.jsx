import React from 'react'
import './nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Nav() {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        <a>
         <MenuIcon sx={{color: 'black'}} /> 
        </a>
        <LightbulbOutlinedIcon sx={{ color: 'orange', 'margin-left':'1rem', 'font-size':'1.7rem'}} />
        <h3 className='Brand-name'>Keep</h3>
      </div>
      <div className='Searchbox'>
            <input className='serachbox' placeholder='Search'></input>
      </div>

      <div className='rightnav'>
        <RestartAltIcon />
        <button className='mode-change'> 
          <DarkModeIcon sx={{ color: 'orange', 'font-size':'25px' }} />   
        </button>
        <div className='user-icon'>
          <h2>Y</h2>
        </div>
      </div>
        
    </div>
  )
}

export default Nav