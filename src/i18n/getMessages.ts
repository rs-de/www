import { NextPageContext } from "next";

export async function getMessages(ctxt: NextPageContext) {
  const defaultMessages = (
    await import(`./locales/${ctxt.defaultLocale}/global.json`)
  ).default;
  const messages =
    ctxt.locale && ctxt.defaultLocale !== ctxt.locale
      ? (await import(`./locales/${ctxt.locale}/global.json`)).default
      : {};
  return { ...defaultMessages, ...messages };
}
