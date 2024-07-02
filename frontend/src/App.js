import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screen/HomePage";
import Header from "./components/Header";
import Login from "./screen/regLogin/Login";
import Register from "./screen/regLogin/Register";
import Logout from "./screen/regLogin/Logout";
import CartScreen from "./screen/cartScreen/CartScreen";
import OrderPage from "./screen/OrderPage";
import AdminPage from "./screen/admin/AdminPage";
import MedListPage from "./screen/admin/MedListPage";
import AddMedPage from "./screen/admin/AddMedPage";
import OrderList from "./screen/admin/OrderList";
 // Import the AboutPage component
import Home from "./components/admin/Home";
import Aboutus from"./components/admin/Aboutus";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<Aboutus title={"About"}/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/cartpage" element={<CartScreen />} />
          <Route exact path="/order" element={<OrderPage />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/admin/medlist" element={<MedListPage />} />
          <Route exact path="/admin/addmed" element={<AddMedPage />} />
          <Route exact path="/admin/orderList" element={<OrderList />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
