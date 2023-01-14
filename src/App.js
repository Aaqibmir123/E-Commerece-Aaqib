import { useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Card from "./Cart/Card";
import Header from "./Layout/Header";
import Products from "./products/Products";
import CartProvider from "./store/CartProvider ";
import Home from "./Layout/Home";
// import Story from "./Layout/Story";
import About from "./Layout/About";
import { Story } from "./Layout/Story";
import Api from "./components/Api";
import { Contactus } from "./components/Forms/Contactus";


function App() {
  const [showCard, Setcard] = useState(false);

  const ToggleCard = () => {
    Setcard(!showCard);
  };

  return (
    <>
      {showCard && <Card Data={ToggleCard} />}
      <Header Toggle={ToggleCard} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/About" element={<About />} />
        <Route exact path="/Api" element={<Api />} />
        <Route exact path="/Contactus" element={<Contactus/>} />
      </Routes>
    </>
  );
}
export default App;
