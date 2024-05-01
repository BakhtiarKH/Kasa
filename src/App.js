import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/style/style.css";
import Index from "./pages/Index.js";
import Layout from "./pages/layouts/Layout.js";

export default function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}
