import React from 'react';

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#1a237e] font-bold text-sm">
        {label}<span className="text-red-600">*</span>
      </label>
      <div className="relative">
        <select 
          name={name}          
          value={value}         
          onChange={onChange}  
          className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#E61E25] w-full bg-white appearance-none text-gray-700"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-3 pointer-events-none">
          <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;