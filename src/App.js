import { BrowserRouter, Routes, Route } from "react-router-dom";
//import styled from "styled-components";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProductsPage />} /> */}
        <Route path="/" element={<SignUpPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/home" element={<HomePage />} />
        <Route path="/bag" element={<bagPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

