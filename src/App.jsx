import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./components/AddProduct/AddProduct";
import Added from "./components/AddProduct/Added";
import Home from "./components/sections/Home/Home";
import Signup from "./components/Authenticate/SignUp";
import Cart from "./components/cart/Cart";
import Login from "./components/Authenticate/Login";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AllProduct from "./components/sections/gallery/AllProduct";
import AddReview from "./components/review/AddReview";
import AllMobiles from './components/sections/gallery/AllMobiles'
import ReviewComp from "./components/review/ReviewComp";
function App() {
  return (
    <>
        <Provider store={store}>
        
      <Router>
            
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/addProduct" element={<AddProduct />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/added" element={<Added />}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/allProducts" element={<AllProduct />}></Route>
                <Route path="/allMobiles" element={<AllMobiles />}></Route>
                <Route path="/addReview" element={<AddReview />}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/reviewComp" element={<ReviewComp></ReviewComp>}></Route>

              </Route>
            </Routes>
      </Router>
        
        </Provider>
    </>
  );
}

export default App;
