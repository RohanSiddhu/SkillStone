import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/products"} element={<Products/>}/>
        <Route path={"/services"} element={<Services/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
