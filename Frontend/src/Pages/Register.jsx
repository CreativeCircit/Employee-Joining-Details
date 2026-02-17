import React, { useState } from 'react';
import { Upload, HelpCircle, ArrowUp } from 'lucide-react';
import InputField from '../Components/InputField';
import SelectField from '../Components/SelectField';
import { useAuth } from '../Contexts/AuthContext';

const Register = () => {
  const {RegisterUser}=useAuth()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [formData, setFormData] = useState({
    photo: null,
    fullName: '',
    contactNumber: '',
    emergencyContactNumber: '',
    email: '',
    panNumber: '',
    adhaarNumber: '',
    dobAdhaar: '',
    dobOriginal: '',
    fatherName: '',
    bloodGroup: '',
    adhaarAddress: '',
    currentAddress: '',
    marriedStatus: '',

    emergencyContacts: [
      { name: '', number: '', relation: '' },
      { name: '', number: '', relation: '' },
      { name: '', number: '', relation: '' },
    ],

    dateOfJoining: '',
    workLocation: '',
    designation: '',
    totalExperience: '',
    previousOrg: '',

    uanNumber: '',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        photo: e.target.files[0],
      }));
    }
  };

  const handleEmergencyChange = (index, field, value) => {
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index][field] = value;
    
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: updatedContacts,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.photo) {
      alert("Please upload a passport size photo.");
      return;
    }
    if (!formData.marriedStatus || formData.marriedStatus === "--Select--") {
      alert("Please select your Marital Status.");
      return;
    }

    const data = new FormData();
    data.append("photo", formData.photo);

    const personalPayload = {
      fullName: formData.fullName,
      contactNumber: formData.contactNumber,
      emergencyContactNumber: formData.emergencyContactNumber,
      personalEmail: formData.email, 
      panNumber: formData.panNumber,
      adhaarNumber: formData.adhaarNumber,
      dobAdhaar: formData.dobAdhaar,
      dobOriginal: formData.dobOriginal,
      fatherName: formData.fatherName,
      bloodGroup: formData.bloodGroup,
      adhaarAddress: formData.adhaarAddress,
      currentAddress: formData.currentAddress,
      marriedStatus: formData.marriedStatus,
    };
    data.append("personalDetails", JSON.stringify(personalPayload));

    const professionalPayload = {
      dateOfJoining: formData.dateOfJoining,
      workLocation: formData.workLocation,
      designation: formData.designation,
      totalExperience: formData.totalExperience,
      previousOrganization: formData.previousOrg,
    };
    data.append("professionalDetails", JSON.stringify(professionalPayload));

    const accountPayload = {
      uanNumber: formData.uanNumber,
      bankName: formData.bankName,
      bankAccountNumber: formData.accountNumber,
      ifscCode: formData.ifscCode,
    };
    data.append("accountDetails", JSON.stringify(accountPayload));
    const formattedContacts = formData.emergencyContacts.map(contact => ({
      name: contact.name,
      contactNumber: contact.number, 
      relation: contact.relation
    }));
    data.append("emergencyContacts", JSON.stringify(formattedContacts));
    try {
      await RegisterUser(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-20">
      {/* Main Header */}
      <header className="bg-[#E61E25] py-6 px-4 shadow-md sticky top-0 z-50">
        <h1 className="text-center text-white text-2xl font-bold leading-tight">
          Employee Joining<br />Details
        </h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-8 mt-4">

        {/* --- Section 1: Photo Upload --- */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
          <label className="text-[#1a237e] font-bold mb-4">Passport Size Photo<span className="text-red-600">*</span></label>
          
          <div className="border-2 border-gray-300 rounded-lg w-48 h-56 flex items-center justify-center bg-white mb-4 relative overflow-hidden">
            {formData.photo ? (
              <img src={URL.createObjectURL(formData.photo)} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="bg-[#2c86d4] text-white p-1 rounded text-xs">?</div>
            )}
          </div>
          
          <label htmlFor="img" className="cursor-pointer bg-[#3b82f6] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded flex items-center gap-2 transition-colors">
            <Upload size={18} />
            Add Photo
          </label>
          <input type="file" id='img' className='hidden' accept="image/*" onChange={handleFileChange} />
        </div>

        {/* --- Section 2: Personal Details --- */}
        <div className="bg-white rounded-xl shadow-sm p-6 pt-10 relative mt-8">
          {/* Floating Pill Header */}
          <div className="absolute -top-5 left-0">
             <span className="bg-[#E61E25] text-white px-6 py-2 rounded-r-full font-medium shadow-md">
               Personal Details
             </span>
          </div>

          <div className="space-y-4">
            <InputField 
                label="Full Name" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="Full Name" 
            />
            
            {/* Phone with Prefix */}
            
            <div className="flex flex-col gap-1">
              <label className="text-[#1a237e] font-bold text-sm">Contact Number<span className="text-red-600">*</span></label>
              <div className="flex">
                <span className="bg-gray-200 border border-gray-300 border-r-0 rounded-l px-3 py-2 text-gray-600 flex items-center">+91</span>
                <input 
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    type="number" 
                    className="w-full border border-gray-300 rounded-r px-3 py-2 outline-none focus:border-[#E61E25]" 
                    placeholder="Contact Number" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#1a237e] font-bold text-sm">Emergency Contact Number<span className="text-red-600">*</span></label>
              <div className="flex">
                <span className="bg-gray-200 border border-gray-300 border-r-0 rounded-l px-3 py-2 text-gray-600 flex items-center">+91</span>
                <input 
                    name="emergencyContactNumber"
                    value={formData.emergencyContactNumber}
                    onChange={handleChange}
                    type="number" 
                    className="w-full border border-gray-300 rounded-r px-3 py-2 outline-none focus:border-[#E61E25]" 
                    placeholder="Emergency Contact Number" 
                />
              </div>
            </div>

            <InputField label="Personal E-Mail Id" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
            <InputField label="PAN Number" name="panNumber" value={formData.panNumber} onChange={handleChange} uppercase placeholder="PAN" />
            <InputField label="Adhaar Number" name="adhaarNumber" value={formData.adhaarNumber} onChange={handleChange} type="number" placeholder="Adhaar" />
            
            <InputField label="Date of Birth as per Adhar Card" name="dobAdhaar" value={formData.dobAdhaar} onChange={handleChange} type="date" />
            <InputField label="Original Birthday Date" name="dobOriginal" value={formData.dobOriginal} onChange={handleChange} type="date" />
            
            <InputField label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" />
            <InputField label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Blood Group" />
            
            <InputField label="Address in Adhar Card" name="adhaarAddress" value={formData.adhaarAddress} onChange={handleChange} placeholder="Address" />
            <InputField label="Current Address" name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address" />
            
            <SelectField 
                label="Married" 
                name="marriedStatus"
                value={formData.marriedStatus}
                onChange={handleChange}
                options={["--Select--", "Yes", "No"]} 
            />
          </div>
        </div>

        {/* --- Section 3: Emergency Contact Details --- */}
        <div className="bg-white rounded-xl shadow-sm p-6 pt-12 relative mt-8">
           <div className="absolute -top-5 left-0">
             <span className="bg-[#E61E25] text-white px-6 py-2 rounded-r-full font-medium shadow-md">
               Emergency Contact Details
             </span>
          </div>
          
          <p className="text-[#1a237e] text-sm font-medium mb-6">
            Three immediate family members contact details (Name/Contact Numbers/Relation) for Emergency
          </p>

          <div className="space-y-6">
            {[0, 1, 2].map((index) => (
               <div key={index} className={`space-y-4 ${index < 2 ? 'border-b pb-4 border-dashed border-gray-200' : ''}`}>
                  <InputField 
                    label="Name" 
                    value={formData.emergencyContacts[index].name}
                    onChange={(e) => handleEmergencyChange(index, 'name', e.target.value)}
                    placeholder="Name" 
                  />
                  <InputField 
                    label="Contact Number" 
                    value={formData.emergencyContacts[index].number}
                    onChange={(e) => handleEmergencyChange(index, 'number', e.target.value)}
                    type="number" 
                    placeholder="Contact Number" 
                  />
                  <InputField 
                    label="Relation" 
                    value={formData.emergencyContacts[index].relation}
                    onChange={(e) => handleEmergencyChange(index, 'relation', e.target.value)}
                    placeholder="Relation" 
                  />
               </div>
            ))}
          </div>
        </div>

        {/* --- Section 4: Professional Details --- */}
        <div className="bg-white rounded-xl shadow-sm p-6 pt-10 relative mt-8">
           <div className="absolute -top-5 left-0">
             <span className="bg-[#E61E25] text-white px-6 py-2 rounded-r-full font-medium shadow-md">
               Professional Details
             </span>
          </div>

          <div className="space-y-4">
            <InputField label="Date of Joining" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} type="date" />
            <InputField label="Work Location" name="workLocation" value={formData.workLocation} onChange={handleChange} placeholder="Location" />
            <InputField label="Designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" />
            <InputField label="Total Work Experience" name="totalExperience" value={formData.totalExperience} onChange={handleChange} placeholder="Experience" />
            <InputField label="Previous Organization Name" name="previousOrg" value={formData.previousOrg} onChange={handleChange} placeholder="Org Name" />
          </div>
        </div>

         {/* --- Section 5: Account Details --- */}
         <div className="bg-white rounded-xl shadow-sm p-6 pt-10 relative mt-8">
           <div className="absolute -top-5 left-0">
             <span className="bg-[#E61E25] text-white px-6 py-2 rounded-r-full font-medium shadow-md">
               Account Details
             </span>
          </div>

          <div className="space-y-4">
            <InputField label="UAN Number" name="uanNumber" value={formData.uanNumber} onChange={handleChange} placeholder="UAN" />
            <InputField label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" />
            <InputField label="Bank Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} type="number" placeholder="Account Number" />
            <InputField label="IFSC Code" name="ifscCode" value={formData.ifscCode} onChange={handleChange} uppercase placeholder="IFSC" />
          </div>
        </div>

        {/* Submit Button Area */}
        <div className="mt-6">
           <button onClick={handleSubmit} className="w-full bg-[#E61E25] text-white py-3 rounded-lg font-bold text-lg shadow hover:bg-red-700 transition">
             Submit Details
           </button>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#009688] text-white p-3 rounded-full shadow-lg hover:bg-[#00796b] transition-colors"
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
};




export default Register;