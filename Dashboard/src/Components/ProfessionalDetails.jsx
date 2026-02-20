import React from 'react'
import ItemBlock from './ItemBlock'

function ProfessionalDetails({info}) {
    
   return (
    <div className="p-8 bprder flex flex-col gap-4 items-start">
            <div className="text-xl font-semibold ">Professional Details</div>
            <ItemBlock heading={"Date Of Joining"} value={info?.dateOfJoining}/>
            <ItemBlock heading={"Designation"} value={info?.designation}/>
            <ItemBlock heading={"Previous Organization"} value={info?.previousOrganization}/>
            <ItemBlock heading={"Total Experience"} value={info?.totalExperience}/>
            <ItemBlock heading={"Work Location"} value={info?.workLocation}/>
        </div>
  )
}

export default ProfessionalDetails