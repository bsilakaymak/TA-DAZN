import React from "react";
import "./App.css";
import MovieApp from "./components/MovieApp";
import SWProvider from "./contexts/SWProvider";

function App() {
  return (
    <SWProvider>
        <MovieApp />
    </SWProvider>
  );
}

export default App;
