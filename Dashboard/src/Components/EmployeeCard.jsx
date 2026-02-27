import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

function EmployeeCard({info}) {
  
  return (
    <Link to={`/employee/${info._id}`} className='w-full  flex gap-3 items-center pt-2 p-1'>
        <div 
        className="  h-[8vh] rounded-full  aspect-square"
        style={{background:`url(${info?.passportPhoto})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"

        }}
        ></div>
        <div className="  w-full">
            <div className=" font-semibold text-black flex justify-between items-center">{info?.personalDetails?.fullName}<MdArrowOutward/></div>
            <div className=" leading-none items-center text-sm text-[#535353] flex gap-6">{info?.professionalDetails?.designation} 
                
                </div>
        </div>
    </Link>
  )
}

export default EmployeeCard