import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Components/Layout"
import StartPage from "./Components/StartPage"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="*" element={<StartPage />} />
          <Route path="/recipes" element={<></>} />
          <Route path="/lists" element={<></>} />
          <Route path="/sign-in" element={<></>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
