import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
