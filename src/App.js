import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Counterpage } from "./pages/Counterpage";
import { Imagepage } from "./pages/Imagepage";

function App() {
  // Para gestionar la página actual
  const [currentPage, setCurrentPage] = useState("counter");

  const renderPage = () => {
    switch (currentPage) {
      case "counter":
        return <Counterpage />;
      case "image":
        return <Imagepage />;
      default:
        return <h1>Bienvenidos!</h1>;
    }
  };

  return (
    <div className="App">
      {/* Navbar que cambia la página según el botón que se presione */}
      <Navbar onPageChange={setCurrentPage} />
      <div className="container mt-4">{renderPage()}</div>
    </div>
  );
}

export default App;
