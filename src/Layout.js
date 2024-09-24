import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export  function Layout() {
  return (
    <div  className='flex flex-row w-screen h-screen  bg-zinc-100 '>
      <Sidebar className="hidden md:block bg-red-500" />
       <Header/>
   </div>
        
  )
}

