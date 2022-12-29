import { useEffect } from "react"
import { hasAuthParams, useAuth } from "react-oidc-context"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Components/Layout"
import ListsPage from "./Pages/ListsPage"
import ProfilePage from "./Pages/ProfilePage"
import RecipesPage from "./Pages/RecipesPage"
import SignInPage from "./Pages/SignInPage"
import StartPage from "./Pages/StartPage"
import { useProfileStore } from "./Store/AuthStore"

function App() {
  const auth = useAuth()
  const profileStore = useProfileStore((state) => state)

  useEffect(() => {
    const setUserProfile = () => {
      if (
        profileStore.User.id === -1 &&
        auth.isAuthenticated &&
        !auth.isLoading
      ) {
        profileStore.FetchUserProfile()
      }
    }
    setUserProfile()
  }, [auth, profileStore, profileStore.User.id])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          {/* TODO: Replace with bad request page */}
          <Route path="*" element={<StartPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
