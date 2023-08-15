import { blogposts } from "@/i18n/locales/en/blogposts";
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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cartesian } from "@/lib/cartesian";
import { loadMarkdown } from "@/lib/loadMarkdown";

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
      <Typography className="text-left font-serif px-2 bg-primary-1">
        {locale != "en" && (
          <div className="border-2 rounded border-yellow-6 bg-yellow-3 p-3 mb-3">
            {t.rich("beware_auto_translation", {
              original: () => (
                <Link
                  href={`/en/blog/${encodeURIComponent(
                    String(router.query?.id)
                  )}`}
                  locale={false}
                >
                  <b>englische Version</b>
                </Link>
              ),
            })}
          </div>
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => ({
  paths: cartesian(
    blogposts.map(({ id }) => id),
    locales ?? []
  ).map(([id, locale]) => ({ params: { id }, locale })),
  fallback: "blocking",
});
