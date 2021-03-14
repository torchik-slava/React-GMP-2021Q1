import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

const HomePage = () => {
  const [cardIndex, setCardIndex] = useState(-1);
  const onCardClick = useCallback((idx) => setCardIndex(idx), [setCardIndex]);
  return (
    <>
      <Header cardIndex={cardIndex} showSearch={() => setCardIndex(-1)} />
      <ErrorBoundary>
        <Main onCardClick={onCardClick} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default HomePage;
