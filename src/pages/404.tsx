import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { GetStaticPropsContext } from "next";

export default function Custom404() {
  return (
    <>
      <Head />
      <Typography>
        <h1>404 - Page Not Found</h1>
      </Typography>
    </>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
