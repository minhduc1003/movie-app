import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
const Home = lazy(() => import("./components/page/Home"));
const Movie = lazy(() => import("./components/page/Movie"));
const MovieDetail = lazy(() => import("./components/page/MovieDetail"));
function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Movie" element={<Movie></Movie>}></Route>
            <Route
              path="/Movie/:slug"
              element={<MovieDetail></MovieDetail>}
            ></Route>
          </Route>
          <Route
            path="*"
            element={<div className="text-white">this is 404 page</div>}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
