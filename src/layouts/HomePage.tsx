import React from "react";
import FilterPanel from "../components/FilterPanel";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Layout from "./Layout";

const HomePage = (): React.ReactElement => {
  return (
    <Layout
      headerPart={
        <>
          <SubHeader addMovieBtnRequired />
          <Search />
        </>
      }
      mainPart={
        <>
          <FilterPanel />, <p>No Movie Found</p>
        </>
      }
      withoutMovie
    />
  );
};

export default HomePage;
