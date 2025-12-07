import { blogposts } from "@/i18n/locales/en/blogposts";
import { ButtonPrimary } from "@/components/Button";
import DateOfCreation from "@/components/DateOfCreation";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { GetStaticPropsContext } from "next";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export default function Blog() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <Head />
      <Typography className="flex flex-col justify-evenly my-2 px-2">
        <h1>{t("blog")}</h1>
        <div className="flex flex-col gap-8">
          {blogposts.map(({ id, created, title, description }) => (
            <div
              key={id}
              className="text-left border rounded-lg border-slate-6 bg-slate-2 px-2"
            >
              <div>
                <h3>{title}</h3>
                <p>
                  {description}
                  <br />
                  <small className="inline-block w-full text-right">
                    <DateOfCreation dateString={created} />
                  </small>
                </p>
              </div>
              <Link href={`/${locale}/blog/${id}`} className="no-underline">
                <ButtonPrimary className="w-full">
                  Read more <ArrowSmallRightIcon className="h-6 w-6" />
                </ButtonPrimary>
              </Link>
              <div className="pb-2" />
            </div>
          ))}
        </div>
      </Typography>
    </>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
