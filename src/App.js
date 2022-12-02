import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Navigate, Route, Routes, Outlet } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

const SidebarLayout = () => (
  <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);

function App() {
  const { user } = useContext(AuthContext);


  return (

    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}>
        </Route>
      {user &&(
        <>
        <Route element={<SidebarLayout />}>
          <Route exact path="/" element={<Home />} >
          </Route>


          <Route path="/users" element={<UserList />}>

          </Route>
          <Route path="/user/:userId" element={<User />}>

          </Route>
          <Route path="/newUser" element={<NewUser />}>

          </Route>

          <Route path="/movies" element={<ProductList />}>

          </Route>
          <Route path="/product/:productId" element={<Product />}>

          </Route>
          <Route path="/newproduct" element={<NewProduct />}>

          </Route>
        </Route>
       
      </>
      )}
      </Routes>


    </Router>
  );
}

export default App;
