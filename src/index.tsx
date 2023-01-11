import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuthProvider } from "react-oidc-context"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./Common/QueryClient"
import { AuthConst, signinCallback } from "./Common/Auth"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <AuthProvider {...AuthConst} onSigninCallback={signinCallback}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <App />
    </QueryClientProvider>
  </AuthProvider>
)
