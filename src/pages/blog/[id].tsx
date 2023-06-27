import { blogposts } from "@/blogposts";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs/promises";

export default function BlogPost({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head />
      <Typography className="text-left font-serif">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Typography>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    messages: await getMessages(context),
    //load markdown by id here
    markdown: await fs.readFile(
      `./src/blogposts/${encodeURIComponent(String(context.params?.id))}.md`,
      "utf8"
    ),
  },
});

export const getStaticPaths = async () => ({
  paths: blogposts.map(({ id }) => ({ params: { id } })),
  fallback: false,
});
