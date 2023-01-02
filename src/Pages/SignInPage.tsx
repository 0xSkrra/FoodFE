import { useAuth } from "react-oidc-context"
import { LoginForm } from "../Components/Forms/loginForm"
import { RegisterForm } from "../Components/Forms/registerForm"
const SignInPage = () => {
  const auth = useAuth()
  if (auth.isLoading) {
    return <h1>loading</h1>
  }
  return (
    <div className=" flex flex-col w-full h-full justify-center xs:space-x-24 md:space-x-48 items-center md:flex-row">
      <div className="flex basis-6/12 w-full h-full items-center">
        <RegisterForm />
      </div>
      <div className="flex basis-6/12 w-full h-full items-center">
        <LoginForm />
      </div>
    </div>
  )
}

export default SignInPage
