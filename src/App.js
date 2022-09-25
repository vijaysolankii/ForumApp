import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Header from "./layout/Header";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
      <Header />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/editBlog/:id" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
