import { blogposts } from "@/blogposts";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs/promises";
import NextHead from "next/head";
import { useRouter } from "next/router";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as shStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
        <ReactMarkdown
          components={{
            code({ inline, children, ...props }) {
              return !inline ? (
                <SyntaxHighlighter
                  {...props}
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, "")}
                  language={"tsx"}
                  PreTag="div"
                  style={{ ...shStyle }}
                  className="rounded-md"
                />
              ) : (
                <code {...props}>{children}</code>
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
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

const cartesian = (...a: Array<any[]>) =>
  a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

export const getStaticPaths: GetStaticPaths = async ({ locales }) => ({
  paths: cartesian(
    blogposts.map(({ id }) => id),
    locales ?? []
  ).map(([id, locale]) => ({ params: { id }, locale })),
  fallback: false,
});
