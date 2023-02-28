import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
import { Layout } from "./Layout";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "./ui-components";
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(aws_exports);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);