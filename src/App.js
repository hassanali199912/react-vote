import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleVote from "./pages/SingleVote";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Edit from "./pages/Edit";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vote" element={<SingleVote />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
