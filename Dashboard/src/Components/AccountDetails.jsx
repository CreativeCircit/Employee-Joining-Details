import React from 'react'
import ItemBlock from './ItemBlock'

function AccountDetails({info}) {
  return (
    <div className="p-8 bprder flex flex-col gap-4 items-start">
            <div className="text-xl font-semibold ">Account Details</div>
            <ItemBlock heading={"Date Of Joining"} value={info?.bankAccountNumber}/>
            <ItemBlock heading={"Designation"} value={info?.bankName}/>
            <ItemBlock heading={"Previous Organization"} value={info?.ifscCode}/>
            <ItemBlock heading={"Total Experience"} value={info?.uanNumber}/>
        </div>
  )
}

export default AccountDetails