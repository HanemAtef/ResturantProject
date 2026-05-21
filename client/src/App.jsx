import { Routes, Route } from "react-router-dom";

import "./App.css";

/* Layouts */
import MainLayouts from "./components/layouts/MainLayouts";
import AuthLayout from "./components/layouts/AuthLayout";

/* Pages */
import Home from "./pages/Home";
import Menu from "./pages/Menu/Menu";
import MealDetails from "./pages/MealDetails/MealDetails";

/* Auth Pages */
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>

      {/* MAIN LAYOUT */}
      <Route element={<MainLayouts />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/meal-details"
          element={<MealDetails />}
        />
        <Route path="/cart" element={<CartPage />} />

        {/* Future Pages */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contacts" element={<Contacts />} /> */}

      </Route>

      {/* AUTH LAYOUT */}
      <Route element={<AuthLayout />}>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Route>

    </Routes>
  );
}

export default App;