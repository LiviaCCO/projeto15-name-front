import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/bag" element={<bagPage />} />
      </Routes>
    </BrowserRouter>
  )
}

