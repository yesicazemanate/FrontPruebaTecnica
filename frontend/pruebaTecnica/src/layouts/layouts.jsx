import React from 'react'
import Sidbar from '../components/Sidbar'
const Layout = ({children}) => {
  return (
    <div className='grid grid-flow-col-dense'>
<div className='' >
    <Sidbar/>
</div>
<div className='w-full justify-center items-center m-2'>{ children }</div>
                
          
    </div>
  )
}

export default Layout
