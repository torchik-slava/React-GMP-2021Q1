import React from "react";
import FilterPanel from "../components/FilterPanel";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";
import CardDetails from "../components/CardDetails";
import Layout from "./Layout";

const MovieDetailsPage = (): React.ReactElement => {
  return (
    <Layout
      headerPart={
        <>
          <SubHeader showShearchBtnRequired />
          <CardDetails />
        </>
      }
      mainPart={
        <>
          <FilterPanel />
          <Main />
        </>
      }
      withCardDetails
    />
  );
};

export default MovieDetailsPage;
