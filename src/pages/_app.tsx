import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

// ...

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Berlin"
      messages={pageProps.messages}
    >
      {
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </NextIntlClientProvider>
  );
}
