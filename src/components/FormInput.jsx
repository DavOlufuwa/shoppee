
const FormInput = ({ label, ...otherProps }) => {
  
  return (
    <div className="group relative my-11">
      <input 
        className={`form-input text-md p-[8px] pl-[5px] w-full outline-none border-b-[1px] border-b-secondary-plum my-5 mx-0 focus:outline-none ${otherProps.readOnly && 'text-[#717171] cursor-not-allowed'}`} {...otherProps} 
        
        />          
      {
        label && (
          <label className={`${otherProps.value.length ? "shrink" : ""}  ${otherProps.readOnly && "text-[12px]"} form-input-label font-bold absolute pointer-none left-[5px] top-4 transition-all duration-300 ease`}>{label}</label>
        )
      }
    </div>    
  )
}

export default FormInput;