import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export  function Layout() {
  return (
    <div  className='flex flex-col flex-wrap md:flex md:flex-row md:h-screen md:w-screen bg-zinc-50 '>
      <div className='hidden md:block'><Sidebar  /></div> 
       <div className=' md:flex-col md:flex-1'>
            <Header/>
            <div className='p-4'>
            </div>
            </div>
        </div>
  )
}

