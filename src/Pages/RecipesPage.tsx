import React from "react"
import { useAuth } from "react-oidc-context"

const RecipesPage = () => {
  const auth = useAuth()
  console.log(auth.user)
  return <div>{}</div>
}

export default RecipesPage
