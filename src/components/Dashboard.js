import React from 'react'

export function Dashboard() {
    const boxdata=[
        {
            label:"Total Vendors",
            totalnumber:44,
            bgcolor:"pink-300"
        },
        {
            label:"Total Categories",
            totalnumber:43,
             bgcolor:"blue-300"
        },
        {
            label:"Total Products",
            totalnumber:445,
             bgcolor:"violet-300"
        },
        {
            label:"Total Sales",
            totalnumber:440,
             bgcolor:"yellow-300"
        },
    ]
    console.log("dashboard setup")
  return (
    <div className='flex flex-col'>
<div className='flex flex-row flex-initial gap-2'>
   {boxdata.map((boxdata,index)=>{
    <Boxmodel boxdata={boxdata} key={index}/>
   })
   } 
</div>

<div>aaaa</div>
<div>cccc</div>
    </div>
  )
}

function Boxmodel({boxdata}){
    return(
        <div className={`w-20 h-20 bg-${boxdata.bgcolor}`}>
{boxdata.label}
        </div>
    )
}