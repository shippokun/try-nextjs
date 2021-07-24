import "../styles/globals.css";
import * as React from "react";
import { RecoilRoot } from "recoil";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TodoAny = any;

type Props = {
  Component: React.ComponentType;
  pageProps: TodoAny;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
    </RecoilRoot>
  );
};

export default MyApp;
