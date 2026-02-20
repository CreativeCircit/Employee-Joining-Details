import React from "react";
import ItemBlock from "./ItemBlock";

function PersonalDetails({ info }) {
  return (
    <div className="p-8 flex flex-col gap-4 items-start">
      <div className="text-xl font-semibold ">Personal Details</div>
      <ItemBlock heading={"Full Name"} value={info?.fullName} />
      <ItemBlock heading={"Personal Email"} value={info?.personalEmail} />
      <ItemBlock heading={"Contact Number"} value={info?.contactNumber} />
      <ItemBlock heading={"Current Address"} value={info?.currentAddress} />
      <ItemBlock heading={"Blood Group"} value={info?.bloodGroup} />
      <ItemBlock heading={"Adhaar Number"} value={info?.adhaarNumber} />
      <ItemBlock heading={"Adhaar Address"} value={info?.adhaarAddress} />
      <ItemBlock heading={"Dob Adhaar"} value={info?.dobAdhaar} />
      <ItemBlock heading={"Dob Original"} value={info?.dobOriginal} />
      <ItemBlock
        heading={"Emergency Contact Number"}
        value={info?.emergencyContactNumber}
      />
      <ItemBlock heading={"Father Name"} value={info?.fatherName} />
      <ItemBlock heading={"Married Status"} value={info?.marriedStatus} />
      <ItemBlock heading={"Pan Number"} value={info?.panNumber} />
    </div>
  );
}

export default PersonalDetails;
