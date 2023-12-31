import "@/styles/globals.css";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      timeZone="Europe/Berlin"
      messages={pageProps.messages}
      defaultTranslationValues={{ b: (v) => <b>{v}</b> }}
    >
      {
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </NextIntlProvider>
  );
}
