import { Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductPage from "./pages/ProductsPage";
import ProductsDetail from "./pages/ProductsDetail";
import PhotoPage from "./pages/PhotoPage";
import ProductsDetail from "./pages/ProductsDetail";

function App() {
  return (
    <div className="App">
      {/* 
      라우팅 연습 
      <h1>routing!</h1>

      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes>
      */}

      {/* 
      라우팅 연습 2 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/1' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
     */}

      <Header />

      {/* 라우팅 하기 */}
      {/* Home 컴포넌트 경로 : / */}
      {/* ProductPage 컴포넌트 경로: /products */}
      {/* ProductDetailPage 컴포넌트 경로: /products/1 */}
      {/* PhotoPage 컴포넌트 경로: /photos */}
      {/* 이외 모든 페이지 NotFound 컴포넌트 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
