import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import { Provider } from "next-auth/client";

import "./styles.css";

const progress = new ProgressBar({
  size: 4,
  color: "#417FA0",
  className: "z-50",
  delay: 10,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <div className="transition duration-500 bg-gray-100 dark:bg-darkgray">
      <ThemeProvider attribute="class">
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
