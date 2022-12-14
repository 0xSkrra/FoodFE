import { useState } from "react"
import { FloatLabelInput } from "../utilities/FloatLabelInput"
import ForgotPasswordModal from "../Modals/forgotPasswordModal"
import { useAuth } from "react-oidc-context"

export const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const auth = useAuth()

  return (
    <>
      <ForgotPasswordModal
        isOpen={isOpen}
        setIsOpen={() => setIsOpen((prev) => !prev)}
      />
      <div className="flex flex-col items-center md:items-start md:flex-col-reverse sm:flex-row w-full py-10 shadow-lg  sm:rounded-md">
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
              <div className="flex ">
                <button
                  type="button"
                  onClick={() => void auth.signinRedirect()}
                  className="secondary-bg standard-text-color transition ease-in-out delay-80 h-8 hover:bg-white transition-200 text-xs rounded-md w-full"
                >
                  Login with our identity provider!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
