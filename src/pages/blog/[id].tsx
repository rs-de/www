import { blogposts } from "@/blogposts";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs/promises";
import NextHead from "next/head";
import { useRouter } from "next/router";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as shStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Alert } from "flowbite-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function BlogPost({
  markdown,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { id, description } =
    blogposts.find((post) => post.id === router.query?.id) ?? {};
  const t = useTranslations();
  return (
    <>
      <Head />
      <NextHead>
        <title>{blogposts.find((post) => post.id === id)?.title}</title>
        <meta name="description" content={description} />
      </NextHead>
      <Typography className="text-left font-serif px-2">
        {locale != "en" && (
          <Alert color={"info"} className="mb-3">
            {t.rich("beware_auto_translation", {
              original: (chunks) => (
                <Link
                  href={`/en/blog/${encodeURIComponent(
                    String(router.query?.id)
                  )}`}
                  locale={false}
                  className="text-black"
                >
                  <b>englische Version</b>
                </Link>
              ),
            })}
          </Alert>
        )}
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

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    return {
      props: {
        messages: await getMessages(context),
        markdown: await loadMarkdown(context),
        locale: context.locale,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

async function loadMarkdown(context: GetStaticPropsContext) {
  const locale = context.locale;
  const id = encodeURIComponent(String(context.params?.id ?? ""));

  if (!blogposts.find((post) => post.id === id)) {
    throw new Error("Not found");
  }
  if (locale && locale !== "en") {
    return await fs.readFile(
      `./src/i18n/locales/${locale}/blogposts/${id}.md`,
      "utf8"
    );
  } else {
    return await fs.readFile(`./src/blogposts/${id}.md`, "utf8");
  }
}

const cartesian = (...a: Array<any[]>) =>
  a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

export const getStaticPaths: GetStaticPaths = async ({ locales }) => ({
  paths: cartesian(
    blogposts.map(({ id }) => id),
    locales ?? []
  ).map(([id, locale]) => ({ params: { id }, locale })),
  fallback: "blocking",
});
