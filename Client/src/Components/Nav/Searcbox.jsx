import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Searcbox() {
  return (<>
    <input className='serachbox' placeholder='Search'></input>
            <a className='searchicon'><SearchIcon /></a>
  </>
  )
}

export default Searcbox