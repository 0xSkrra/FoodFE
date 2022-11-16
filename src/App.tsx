import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Components/Layout"
import ListsPage from "./Components/ListsPage"
import RecipesPage from "./Components/RecipesPage"
import SignInPage from "./Components/SignInPage"
import StartPage from "./Components/StartPage"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/sign-in" element={<SignInPage />} />

          {/* TODO: Replace with bad request page */}
          <Route path="*" element={<StartPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
