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
        <div className="w-full sm:w-1/2 max-w-lg">
          <div className="flex flex-row space-x-2 w-full mb-2">
            <div>
              <h1 className="text text-start font-semibold">Login</h1>
            </div>
            <div className="w-full">
              <h1
                onClick={() => setIsOpen(!isOpen)}
                className="text h1-link text-end font-semibold"
              >
                Forgot password?
              </h1>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            <div className=" text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
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
              <div className="relative">
                <button
                  type="submit"
                  className="bg-gray-500 text-white rounded-md w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
