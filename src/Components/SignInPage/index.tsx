import React, { useState } from "react"
import { FloatLabelInput } from "../utilities/FloatLabelInput"
import { LoginForm } from "./loginForm"
import { RegisterForm } from "./registerForm"

const SignInPage = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row">
      <div className="basis-5/12">
        <RegisterForm />
      </div>
      <div className="basis-2/12"></div>
      <div className="basis-5/12">
        <LoginForm />
      </div>
    </div>
  )
}

export default SignInPage
