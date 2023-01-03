import { useAuth } from "react-oidc-context"

export const RegisterForm = () => {
  const auth = useAuth()
  return (
    <div className="flex flex-col items-center md:items-end md:flex-col-reverse sm:flex-row w-full py-10 shadow-lg  sm:rounded-md">
      <div className="w-full   max-w-lg">
        <div className="mb-2">
          <h1 className="text-xs text-start mb-5 font-semibold">
            Don't have an account?
          </h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="md:text-xs leading-6 space-y-4 sm:leading-7">
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
