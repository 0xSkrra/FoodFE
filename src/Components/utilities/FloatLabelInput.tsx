interface propsInterface {
  label: string
  value: string
  onChange: (e: any) => void
  isPassword?: boolean
  id: string
}
export const FloatLabelInput = ({
  label,
  value,
  onChange,
  isPassword = false,
  id,
}: propsInterface) => {
  return (
    <div className="relative float-label-input">
      <input
        onChange={onChange}
        type={isPassword ? "password" : "text"}
        defaultValue={value || ""}
        id={id}
        autoComplete="off"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-xs select-none duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </div>
  )
}
