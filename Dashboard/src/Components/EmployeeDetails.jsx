import PersonalDetails from "./PersonalDetails";
import { useParams } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import ProfessionalDetails from "./ProfessionalDetails";
import EmergencyContacts from "./EmergencyContacts";
import AccountDetails from "./AccountDetails";
import { useState } from "react";

function EmployeeDetails() {
  const { id } = useParams();
  const { allData,mode } = useAuth();
  const data = allData?.find((e) => id === e._id);

  return (
    <section className={`divide-y flex flex-col gap-2 p-2 ${ mode== "creative" ? 
    " bg-[#0C1014] text-white" 
    : "bg-slate-100 text-black"}`}>
      <div className="p-8 bprder flex gap-4 items-center">
        <div
          className="h-[12vh]  aspect-square rounded-full"
          style={{
            background: `url(${data?.passportPhoto})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="">
          <div className="text-xl font-semibold">
            {data?.personalDetails?.fullName}
          </div>
          <div className="text-[#646464]">
            {data?.professionalDetails?.designation}
          </div>
        </div>
      </div>
      <section id="Personal"><PersonalDetails info={data?.personalDetails} /></section>
      <section id="Professional"><ProfessionalDetails info={data?.professionalDetails} /></section>
      <section id="Emergency"><EmergencyContacts info={data?.emergencyContacts} /></section>
      <section id="Account"><AccountDetails info={data?.accountDetails} /></section>
    </section>
  );
}

export default EmployeeDetails;
