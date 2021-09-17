import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

import { Provider } from "next-auth/client";

import "./styles.css";

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
