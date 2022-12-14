import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuthProvider } from "react-oidc-context"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./Common/ReactQuery"
import { AuthConst, signinCallback } from "./Common/Auth"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <AuthProvider {...AuthConst} onSigninCallback={signinCallback}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AuthProvider>
)
