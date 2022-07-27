import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { ProtectedRoute } from "./components/protectedRoute";
import { Fav } from "./pages/Fav";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorites" element={<Fav />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
