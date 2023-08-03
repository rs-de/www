import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className="box-border bg-primary-1 selection:text-white dark:selection:text-gray-800
       selection:bg-gray-800 dark:selection:bg-gray-200 min-h-screen flex flex-col justify-between antialiased"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
