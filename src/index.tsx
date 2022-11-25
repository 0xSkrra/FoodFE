import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuthProvider } from "react-oidc-context"
import { AuthConst } from "./Common/util/AuthConst"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./Common/React-Query"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <AuthProvider
    {...AuthConst}
    onSigninCallback={() =>
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      )
    }
  >
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AuthProvider>
)
