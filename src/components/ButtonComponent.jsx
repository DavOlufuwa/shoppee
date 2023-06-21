import { Button } from "@mui/material"



const ButtonComponent = ({children, buttonType, ...otherprops}) => {
  const buttonHandler = {
    outlined: "border-[1px] text-text-secondary border-primary-brand hover:text-text-primary hover:bg-primary-brand",
    contained: "bg-primary-brand text-text-primary hover:text-text-primary hover:bg-primary-brand-hover",
    disabled: "bg-primary-brand-inactive text-[#808080] cursor-not-allowed",
  }

  return (
    <button 
      {...otherprops} 
      className={
        ` w-[160px] capitalize text-[16px] px-4 py-2 ${buttonHandler[buttonType]} transition duration-200 cursor-pointer`
      }
    >
      {children}
    </button>
  )
}

export default ButtonComponent