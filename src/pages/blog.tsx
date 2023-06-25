import Head from "@/components/Head";
import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations();
  return (
    <>
      <Head />
      <div>
        <h1>Blog</h1>
      </div>
    </>
  );
}
export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
