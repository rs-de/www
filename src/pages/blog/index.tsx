import { blogposts } from "@/blogposts";
import ButtonPrimary from "@/components/ButtonPrimary";
import DateOfCreation from "@/components/DateOfCreation";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { Card } from "flowbite-react";
import { NextPageContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function Blog() {
  const t = useTranslations();

  return (
    <>
      <Head />
      <Typography>
        <h1>{t("blog")}</h1>
        {blogposts.map(({ id, created, title, description }) => (
          <Card key={id} className="text-left">
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
            <Link href={`/blog/${id}`} className="no-underline">
              <ButtonPrimary className="w-full">
                Read more&nbsp;
                <HiArrowRight />
              </ButtonPrimary>
            </Link>
          </Card>
        ))}
      </Typography>
    </>
  );
}
export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
