import React from "react";
import ItemBlock from "./ItemBlock";

function EmergencyContacts({ info }) {

  return (
    <div className="p-8 flex flex-col gap-4 items-start">
      <div className="text-xl font-semibold ">Emergency Contacts</div>

      <div className=" flex flex-col gap-4 divide-y  items-start w-full">
        {info?.map((e, i) => (
          <div className="flex flex-col gap-2 items-start w-full" key={i}>
            <ItemBlock heading={"Name"} value={e?.name} />
            <ItemBlock heading={"Relation"} value={e?.relation} />
            <ItemBlock heading={"Contact Number"} value={e?.contactNumber} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyContacts;
