import { useState } from "react"
import { FloatLabelInput } from "../utilities/FloatLabelInput"
import ForgotPasswordModal from "../Modals/forgotPasswordModal"

export const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ForgotPasswordModal
        isOpen={isOpen}
        setIsOpen={() => setIsOpen((prev) => !prev)}
      />
      <form className="flex flex-col items-center md:items-start md:flex-col-reverse sm:flex-row w-full py-10 shadow-lg  sm:rounded-md">
        <div className="w-full md:w-1/2 max-w-lg">
          <div className="flex flex-row space-x-2 w-full mb-2">
            <div>
              <h1 className="text-xs text-start mb-2 font-semibold">
                Login
              </h1>
            </div>
            <div className="w-full">
              <h1
                onClick={() => setIsOpen(!isOpen)}
                className="text-xs h1-link secondary-text-color text-end font-semibold"
              >
                Forgot password?
              </h1>
            </div>
          </div>

          <div className=" flex max-w-lg divide-gray-200">
            <div className=" text-xs w-full space-y-4 sm:text-lg ">
              <FloatLabelInput
                label={"Email"}
                value={email}
                id={"email-login"}
                onChange={(v) => setEmail(v.target.value)}
              />
              <FloatLabelInput
                label={"Password"}
                value={password}
                isPassword={true}
                id={"password-login"}
                onChange={(v) => setPassword(v.target.value)}
              />
              <div className="flex -mt-6">
                <button
                  type="submit"
                  className="secondary-bg standard-text-color transition ease-in-out delay-80 h-8 hover-bg transition-200 text-xs rounded-md w-full"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
