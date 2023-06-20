
const FormInput = ({ label, ...otherProps }) => {
  
  return (
    <div className="group relative my-11">
      <input className="form-input text-md p-[8px] pl-[5px] w-full outline-none border-b-[1px] border-b-secondary-plum my-6 mx-0 focus:outline-none" {...otherProps} />          
      {
        label && (
          <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label font-bold absolute pointer-none left-[5px] top-3 transition-all duration-300 ease`}>{label}</label>
        )
      }
    </div>    
  )
}

export default FormInput;