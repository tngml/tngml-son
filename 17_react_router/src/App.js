import { Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardDetail from "./pages/BoardDetail";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetail from "./pages/ProductsDetail";
import PhotoPage from "./pages/PhotoPage";

function App() {
  return (
    <div className="App">
      {/* <h1>routing!</h1>

        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/1" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/1" element={<ProductsPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Header />
      <ProductsPage />
      <ProductsDetail />
      <PhotoPage />
      <NotFound />
    </div>
  );
}

export default App;
