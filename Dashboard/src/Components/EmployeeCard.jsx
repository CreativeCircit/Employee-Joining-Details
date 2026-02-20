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
            <div className=" font-semibold flex justify-between items-center">{info?.personalDetails?.fullName}<MdArrowOutward/></div>
            <div className=" leading-none items-center text-sm text-[#535353] flex gap-6">{info?.professionalDetails?.designation} 
                {/* <span className='border text-xs px-2 rounded-full border-[#000079] font-semibold text-[#00004e] bg-[#7676ff11]'>{info?.personalDetails?.personalEmail}</span>
                <span className='border text-xs px-2 rounded-full border-[#005716] font-semibold text-[#004e04] bg-[#76ff8d11]'>+91 {info?.personalDetails?.contactNumber}</span
                > */}
                </div>
        </div>
    </Link>
  )
}

export default EmployeeCard