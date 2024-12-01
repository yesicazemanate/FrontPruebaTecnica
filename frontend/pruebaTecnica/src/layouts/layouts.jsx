import React from 'react'
import Sidbar from '../components/Sidbar'
const Layout = ({children}) => {
  return (
    <div className='grid grid-flow-col-dense'>
<div className='w-1/4' >
    <Sidbar/>
</div>
<div className='flex-1 justify-center items-center bg-slate-400 m-2 min-w-fit '>{ children }</div>
                
          
    </div>
  )
}

export default Layout
