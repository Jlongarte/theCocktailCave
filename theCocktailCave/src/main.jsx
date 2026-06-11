import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import BookATable from "./pages/BookATable";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/menu-page" element={<MenuPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookATable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
