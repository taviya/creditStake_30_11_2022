import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faqs from "./Component/Faqs";
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer pauseOnFocusLoss={false} />
        <Header />
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route exact path="/faq" element={<Faqs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
