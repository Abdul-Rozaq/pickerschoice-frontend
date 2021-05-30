import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./features/userSlice";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./component/ProtectedRoute";
import AdminCustomer from "./pages/AdminCustomer";
import AdminOrders from "./pages/AdminOrders";
import AdminProducts from "./pages/AdminProducts";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const jwt = sessionStorage.getItem("token");
      const user = jwtDecode(jwt);
      dispatch(setCurrentUser(user));
    } catch (error) {}
    return () => {};
  }, [dispatch]);

  return (
    <div className="app">
      <ToastContainer />
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/history/orders/:orderId?" component={MyOrders} />
        <Route exact path="/admin/login" component={AdminLogin} />
        <ProtectedRoute
          exact
          path="/admin/products/edit/:productId"
          component={ProductEdit}
          role="ROLE_ADMIN"
        />
        <ProtectedRoute
          exact
          path="/admin/products/new"
          component={ProductCreate}
          role="ROLE_ADMIN"
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          component={AdminProducts}
          role="ROLE_ADMIN"
        />
        <ProtectedRoute
          exact
          path="/admin/customers"
          component={AdminCustomer}
          role="ROLE_ADMIN"
        />
        <ProtectedRoute
          exact
          path="/admin/orders/:orderId?"
          component={AdminOrders}
          role="ROLE_ADMIN"
        />
        <ProtectedRoute
          exact
          path="/admin"
          component={AdminDashboard}
          role="ROLE_ADMIN"
        />
        <Route path="/about" component={AboutPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
