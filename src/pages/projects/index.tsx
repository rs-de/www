import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations();
  return (
    <Typography className="my-2 px-2">
      <h1>{t("projects")}</h1>
      <div className="bg-[url('/blog/padlock.png')] bg-no-repeat border border-primary-6 rounded-2xl drop-shadow-md overflow-hidden">
        <div className="h-full bg-gradient-to-br from-transparent  to-primary-2 to-40% overflow-hidden">
          <div className="w-full h-full text-left float-left p-2 sm:p-4">
            <div className="w-[175px] h-[210px] float-left" />
            <h2 className="!mt-2">B2B platform 2022/23 (not public)</h2>
            <h3>Relaunch of B2B shop in TypeScript and React</h3>
            <ul>
              <li>
                <b>Main features:</b> Product search/filter, Product details,
                order import, multi carts, checkout, CMS integration,
                Progressive Web App
              </li>
              <li className="">
                <b>Usage:</b> ~100 orders per day, peak ~1000
              </li>
              <li>
                <b>Stack:</b> TypeScript, React, ReactRouter, ReduxToolkit,
                RTKQuery, MUI, Cypress, github with actions, docker, portainer
              </li>
              <li>
                <b>Backend: </b> RESTFul APIs (extra team)
              </li>
              <li>
                <b>Internationalization:</b> 7 languages integrated with i18next
              </li>
              <li>
                <b>Team size: </b> 3 (1 lead dev, 1 dev, 1 owner/QA)
              </li>
              <li>
                <b>My role: </b> lead dev
              </li>
            </ul>
            I did the setup of the project from scratch including CI/CD with
            gitlab (later github) and docker. This was my first project i used
            &nbsp;
            <Link href="https://redux-toolkit.js.org/rtk-query/overview">
              RTK Query
            </Link>
            . The overall experience with it was very good. If a project is
            working with redux, I would use RTKQuery again!
          </div>
        </div>
      </div>
    </Typography>
  );
}

export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
