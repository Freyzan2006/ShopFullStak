import React from "react";
import { Routes, Route } from "react-router-dom"


// components
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Details from "./pages/Details/Details";
import Footer from "./components/Footer/Footer";
//


const App: React.FC = () => {

  return (
    <div>
        <Header />
        <Routes>
            <Route path = "/" element={<Main  />} />
            <Route path="/about" element = {<About />} />

            <Route path = "/details/:id" element = {<Details />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;

