import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";

export default function Custom500() {
  return (
    <>
      <Head />
      <Typography>
        <h1>500 - Server-side error occurred</h1>
      </Typography>
    </>
  );
}

export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
