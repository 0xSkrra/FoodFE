import { LoginForm } from "../Components/Forms/loginForm"
import { RegisterForm } from "../Components/Forms/registerForm"
import { useAuth, hasAuthParams } from "react-oidc-context"
import { useEffect } from "react"
const SignInPage = () => {
  const auth = useAuth()
  // automatically sign-in
  useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading
    ) {
      auth.signinRedirect()
    }
  }, [
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    auth.signinRedirect,
    auth,
  ])
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
