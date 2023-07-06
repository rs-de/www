import Head from "@/components/Head";
import { getMessages } from "@/i18n/getMessages";
import { A } from "@/components/A";
import { NextPageContext } from "next";
import { useLocale, useTranslations } from "next-intl";
import { Fragment } from "react";
import NextHead from "next/head";
import Typography from "@/components/Typography";
import { Avatar } from "flowbite-react";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <Head />
      <NextHead>
        <title>Jochen Probst - Web application development</title>
      </NextHead>
      <div className="w-full flex flex-col items-center p-3 bg-primary dark:bg-gray-700">
        <Typography className=" text-gray-100 relative">
          <Avatar alt="Jochen Probst" size="lg" rounded img="/jp.jpeg">
            <h1 className="text-white mb-3 sm:mb-4">{t("welcome_title")}</h1>
          </Avatar>
          <p className="text-justify">{t.rich("welcome_description")}</p>
          <p className="text-justify">{t.rich("welcome_introduction")}</p>
          <A href="mailto:contact@rushsoft.de">
            <span className="font-bold text-white dark:text-blue-300">
              {t("contact")}
            </span>
          </A>
          &nbsp;me.
        </Typography>
      </div>
      <Typography className="p-3">
        <h1>{t("experiences")}</h1>
        <p>{t.rich("experiences_description")}</p>
        <h2>{t("programming_languages")}</h2>
        <p>
          {experiencesProgrammingLanguages.map(
            ({ from, to, technology }, index) => (
              <Experience {...{ from, to, index, technology }} key={index} />
            )
          )}
        </p>
        <h2>{t("frontend_frameworks")}</h2>
        <p>
          {experiencesFrontendFrameworks.map((experience, index) => (
            <Experience {...{ ...experience, index }} key={index} />
          ))}
        </p>
        <h2>{t("tools")}</h2>
        <p>
          {tools
            .slice()
            .sort((a, b) => (a.stillInUse && !b.stillInUse ? -1 : 0))
            .map(({ name, href, mainUseCase, stillInUse }) => (
              <Fragment key={name}>
                <span>
                  <span>{mainUseCase}</span>:&nbsp;
                  <A
                    {...{ href }}
                    className={`${
                      stillInUse ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    <b>{name}</b>
                  </A>
                </span>
                <br />
              </Fragment>
            ))}
        </p>
      </Typography>
      <Typography className="p-3">
        <h1>{t("companies_i_worked_for")}</h1>
        {companiesIWorkedFor.map(
          ({ name, href, [`href_${locale}`]: href_lang }) => (
            <div key={name} className="p-1">
              <A href={href_lang ?? href}>{name}</A>
            </div>
          )
        )}
      </Typography>
    </>
  );
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      messages: await getMessages(context),
    },
  };
}

const experiencesProgrammingLanguages = [
  { from: 2001, technology: "JavaScript" },
  { from: 2021, technology: "TypeScript" },
  { from: 1999, to: 2018, technology: "PHP" },
  { from: 2003, to: 2006, technology: "Java" },
  { from: 2001, to: 2003, technology: "Visual Basic" },
  { from: 1999, to: 2001, technology: "C++" },
];

const experiencesFrontendFrameworks = [
  { from: 2015, technology: "React" },
  { from: 2023, technology: "Next.js" },
  { from: 2023, technology: "tailwindcss" },
  { from: 2016, technology: "Redux" },
  { from: 2018, technology: "Redux Toolkit" },
  { from: 2019, technology: "Material UI (MUI)" },
  { from: 2019, technology: "storybook" },
  { from: 2009, to: 2014, technology: "Zend Framework" },
];

const companiesIWorkedFor: Array<Record<string, string>> = [
  {
    name: "diconium GmbH",
    href: "https://diconium.com/",
  },
  { name: "Kodak alaris", href: "https://www.alarisworld.com" },
  { name: "PBS Network", href: "https://www.pbsnetwork.eu" },
  {
    name: "DaimlerChrysler AG",
    href: "https://de.wikipedia.org/wiki/Mercedes-Benz_Group",
    href_en: "https://en.wikipedia.org/wiki/Mercedes-Benz_Group",
  },
  {
    name: "Neckarwerke Stuttgart",
    href: "https://de.wikipedia.org/wiki/Neckarwerke_Stuttgart",
  },
];

const tools = [
  {
    name: "Docker",
    href: "https://www.docker.com",
    mainUseCase: "Deployment",
    stillInUse: true,
  },
  {
    name: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    mainUseCase: "IDE",
    stillInUse: true,
  },
  {
    name: "Github Copilot X",
    href: "https://copilot.github.com/",
    mainUseCase: "Code Completion",
    stillInUse: true,
  },
  {
    name: "Jira",
    href: "https://www.atlassian.com/software/jira",
    mainUseCase: "Issue Tracking",
    stillInUse: true,
  },
  {
    name: "Express",
    href: "https://expressjs.com/",
    mainUseCase: "Backend Framework",
    stillInUse: true,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    mainUseCase: "Backend Runtime",
    stillInUse: true,
  },
  {
    name: "Prettier",
    href: "https://prettier.io/",
    mainUseCase: "Code Formatting",
    stillInUse: true,
  },
  {
    name: "ESLint",
    href: "https://eslint.org/",
    mainUseCase: "Code Linting",
    stillInUse: true,
  },
  {
    name: "Vite",
    href: "https://vitejs.dev/",
    mainUseCase: "Bundler",
    stillInUse: true,
  },
  {
    name: "git",
    href: "https://git-scm.com/",
    mainUseCase: "Version Control",
    stillInUse: true,
  },
  {
    name: "github",
    href: "https://github.com",
    mainUseCase: "Version Control",
    stillInUse: true,
  },
  {
    name: "gitlab",
    href: "https://gitlab.com/",
    mainUseCase: "Version Control",
    stillInUse: true,
  },
  {
    name: "npm",
    href: "https://www.npmjs.com/",
    mainUseCase: "Package Manager",
    stillInUse: true,
  },
  {
    name: "knex.js",
    href: "https://knexjs.org/",
    mainUseCase: "RDMS Query Builder",
    stillInUse: true,
  },
  {
    name: "SonarQube",
    href: "https://www.sonarqube.org/",
    mainUseCase: "Code Quality",
    stillInUse: true,
  },
  {
    name: "OWASP",
    href: "https://owasp.org/",
    mainUseCase: "Security",
    stillInUse: true,
  },
  {
    name: "composer",
    href: "https://getcomposer.org/",
    mainUseCase: "Package Manager",
    stillInUse: false,
  },
  {
    name: "Atom",
    href: "https://atom.io/",
    mainUseCase: "IDE",
    stillInUse: false,
  },
  {
    name: "nginx",
    href: "https://nginx.org/",
    mainUseCase: "Webserver",
    stillInUse: false,
  },
];

function Experience({ from, to, technology }: ExperienceProps) {
  const t = useTranslations();
  return (
    <>
      <span className={`${to && "text-gray-400"}`}>
        {to && to == from ? (
          <>
            {t("some_weeks")}&nbsp;{technology}&nbsp;({from})
          </>
        ) : (
          <>
            {t("year", {
              count: (to ?? new Date().getFullYear()) - from,
              plus: to ? "" : "+",
            })}
            &nbsp;
            <span className={`font-bold ${!to && "text-primary"}`}>
              {technology}
            </span>
            &nbsp; ({to ? `${from}-${to}` : t("since", { number: from })})
          </>
        )}
      </span>
      <br />
    </>
  );
}

type ExperienceProps = {
  index: number;
  from: number;
  to?: number;
  technology: string;
};
