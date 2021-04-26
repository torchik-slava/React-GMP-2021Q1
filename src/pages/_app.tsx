import "../index.css";
import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { END } from "redux-saga";
import { SagaStore, wrapper } from "../redux/configureStore";

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = { ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) };
    /*
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as SagaStore).sagaTask.toPromise();
    }
    */
    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
