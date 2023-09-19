import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksList from "./pages/BooksList";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/books" Component={BooksList} />
          <Route path="/books/:id" Component={BookDetails} />
          <Route
            path="*"
            element={<Navigate replace={true} to={"/books"}></Navigate>}
          ></Route>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
