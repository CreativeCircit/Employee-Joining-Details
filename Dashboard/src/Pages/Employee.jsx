import React, { useState } from 'react'
import Switch from '../Components/Switch'
import EmployeeCard from '../Components/EmployeeCard'
import { useAuth } from '../Contexts/AuthContext'
import SwipeCard from '../Components/SwipeCard'

function Employee() {
  const {allData,mode,cardData,setCardData}=useAuth()
  
  

  return (<>
    {mode=="corporate"&&<div className='h-screen w-full gap-2 bg-zinc-100 p-2 flex flex-col '>

      
      <section className='h-[30vh] border flex justify-end flex-col bg-[#0000c4] text-white rounded-2xl p-4'>
        <div className="text-4xl  font-semibold">{allData?.length}</div>
        <h1 className='text-3xl  font-semibold'>Total Employees</h1>
      </section>
      <section className='h-[70vh]  flex flex-col gap-2 customScroller overflow-auto divide-y p-2 bg-white rounded-3xl'>
        {allData?.map((e,i)=><EmployeeCard info={e} key={i}/>)}
        
      </section>
    </div>}

    {mode=="creative"&&<div className='h-screen w-full gap-2 bg-[#0C1014] p-2 flex flex-col '>
      <section className=' absolute top-6 left-6  z-50    flex justify-between items-center'>
        <div className="text-[#838383]  text-2xl ">Employee</div>
      </section>
      <section  className="h-screen w-full customScroller absolute top-0 left-0 overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        {allData?.map((e,i)=><SwipeCard info={e} key={i}/>)}


      </section>

      

      
    </div>}
    
 <Switch/></> )
}


export default Employee