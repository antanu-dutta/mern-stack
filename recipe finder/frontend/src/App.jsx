import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/UI/Header";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "./components/UI/Footer";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import PopularPage from "./pages/PopularPage";
import CategoryPage from "./pages/CategoryPage";
import MyRecipes from "./pages/MyRecipies";
import ProfilePage from "./pages/Profile";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
