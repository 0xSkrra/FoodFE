import React, { useState } from "react"
import { useAuth } from "react-oidc-context"
import { FloatLabelInput } from "../utilities/FloatLabelInput"

export const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [password, setPassword] = useState("")
  const auth = useAuth()
  return (
    <div className="flex flex-col items-center md:items-end md:flex-col-reverse sm:flex-row w-full py-10 shadow-lg  sm:rounded-md">
      <div className="w-full md:w-1/2  max-w-lg">
        <div className="mb-2">
          <h1 className="md:text-sm text-lg text-start mb-5 font-semibold">
            Don't have an account?
          </h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="md:text-sm lg:text-lg leading-6 space-y-4 sm:leading-7">
            <div className="flex content-center">
              <button
                type="button"
                onClick={() => void auth.signinRedirect()}
                className="secondary-bg standard-text-color transition ease-in-out delay-80 h-8 hover-bg transition-200 text-xs rounded-md w-full"
              >
                Continue with Identity Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
