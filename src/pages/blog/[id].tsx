import { blogposts } from "@/blogposts";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs/promises";
import NextHead from "next/head";
import { useRouter } from "next/router";

export default function BlogPost({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { id, description } =
    blogposts.find((post) => post.id === router.query?.id) ?? {};
  return (
    <>
      <Head />
      <NextHead>
        <title>{blogposts.find((post) => post.id === id)?.title}</title>
        <meta name="description" content={description} />
      </NextHead>
      <Typography className="text-left font-serif px-2">
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
