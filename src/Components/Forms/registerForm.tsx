import React, { useState } from "react"
import { FloatLabelInput } from "../utilities/FloatLabelInput"

export const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [password, setPassword] = useState("")
  return (
    <form className="flex flex-col items-center md:items-end md:flex-col-reverse sm:flex-row w-5/6 py-10 shadow-lg  sm:rounded-md">
      <div className="w-full sm:w-1/2 max-w-lg">
        <div className="mb-2">
          <h1 className="text-sm text-start font-semibold">
            Register new account
          </h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="text-xs leading-6 space-y-4 sm:text-sm sm:leading-7">
            <FloatLabelInput
              label={"Username"}
              value={username}
              id={"username-register"}
              onChange={(v) => setUsername(v.target.value)}
            />
            <FloatLabelInput
              label={"Email"}
              value={email}
              id={"email-register"}
              onChange={(v) => setEmail(v.target.value)}
            />
            <FloatLabelInput
              label={"Password"}
              value={password}
              isPassword={true}
              id={"password-register"}
              onChange={(v) => setPassword(v.target.value)}
            />
            <FloatLabelInput
              label={"Verify password"}
              value={verifyPassword}
              isPassword={true}
              id={"verifyPassword-register"}
              onChange={(v) => setVerifyPassword(v.target.value)}
            />
            <div className="flex content-center">
              <button
                type="submit"
                className="secondary-bg standard-text-color transition ease-in-out delay-80 h-8 hover-bg transition-200 text-xs rounded-md w-full"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
