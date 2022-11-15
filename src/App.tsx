import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import StartPage from "./Components/StartPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="*" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
