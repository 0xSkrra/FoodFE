import { LoginForm } from "../Components/Forms/loginForm"
import { RegisterForm } from "../Components/Forms/registerForm"

const SignInPage = () => {
  return (
    <div className=" flex flex-col w-full h-full justify-center items-center sm:flex-row">
      <div className="flex basis-5/12 h-5/6 items-center">
        <RegisterForm />
      </div>
      <div className="basis-2/12"></div>
      <div className="flex basis-5/12 h-5/6 items-center">
        <LoginForm />
      </div>
    </div>
  )
}

export default SignInPage
