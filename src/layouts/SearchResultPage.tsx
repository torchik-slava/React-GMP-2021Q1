import React from "react";
import FilterPanel from "../components/FilterPanel";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Main from "../components/Main";
import Layout from "./Layout";

const SearchResultPage = (): React.ReactElement => {
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
          <FilterPanel />
          <Main />
        </>
      }
    />
  );
};

export default SearchResultPage;
