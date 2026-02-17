const InputField = ({ label, name, value, onChange, type="text", placeholder, uppercase }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#1a237e] font-bold text-sm">
        {label}<span className="text-red-600">*</span>
      </label>
      <input 
        name={name}         
        value={value}       
        onChange={onChange} 
        type={type} 
        placeholder={placeholder}
        className={`border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#3c1ee6] w-full ${uppercase ? 'uppercase' : ''}`}
      />
    </div>
  )
}

export default InputField;