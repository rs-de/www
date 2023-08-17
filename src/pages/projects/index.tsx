import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";
import { useLocale, useTranslations } from "next-intl";
import { loadMarkdown } from "../../lib/loadMarkdown";
import Markdown from "react-markdown";
import { ComponentProps } from "react";
import { A } from "@/components/A";
import { QRCodeCanvas } from "qrcode.react";

export default function Projects({ markdowns }: { markdowns: string[] }) {
  const t = useTranslations();
  return (
    <Typography className="my-2 px-2">
      <h1>{t("projects_headline")}</h1>
      <div className="flex flex-col items-center gap-8">
        <a href="#2023-3" id="2023-3">
          #
        </a>
        <div className="w-full bg-[url('/img/projects/shopping-list-visual.webp')] bg-contain sm:bg-auto bg-no-repeat border border-primary-6 rounded-2xl drop-shadow-md overflow-hidden">
          <Box className="bg-gradient-to-b sm:bg-gradient-to-br from-transparent to-primary-2  to-[25%] sm:to-[35%]">
            <div className="w-[255px] h-[315px] float-left" />
            <h2 className="!mt-0">Shopping-list App (2023)</h2>
            <MarkdownIntl>{markdowns[3]}</MarkdownIntl>
            <QRCodeCanvas
              className="m-auto"
              value="https://shopping-list-eta.vercel.app"
            />
          </Box>
        </div>
        <a href="#2023-2" id="2023-2">
          #
        </a>
        <div className="bg-[url('/img/projects/rushsoft-de-visual.png')] bg-contain sm:bg-auto bg-no-repeat bg-right-top border border-primary-6 rounded-2xl drop-shadow-md overflow-hidden">
          <BoxImageRight>
            <div className="h-[50px] sm:w-[290px] sm:h-[340px] sm:float-right" />
            <h2 className="!mt-2">{t("development_of_this_site")}</h2>
            <MarkdownIntl>{markdowns[2]}</MarkdownIntl>
          </BoxImageRight>
        </div>
        <a href="#2023-1" id="2023-1">
          #
        </a>
        <div className="bg-[url('/img/projects/padlock.png')] bg-no-repeat border border-primary-6 rounded-2xl drop-shadow-md overflow-hidden">
          <Box className="bg-gradient-to-br from-transparent  to-primary-2 to-40%">
            <div className="w-[175px] h-[230px] float-left" />
            <h2 className="!mt-2">B2B platform 2022/23 (not public)</h2>
            <MarkdownIntl>{markdowns[0]}</MarkdownIntl>
          </Box>
        </div>
        <a href="#2021" id="2021">
          #
        </a>
        <div className="border border-primary-6 rounded-2xl drop-shadow-md overflow-hidden">
          <Box>
            <h2 className="!mt-2">Security driven System update (2021)</h2>
            <MarkdownIntl>{markdowns[1]}</MarkdownIntl>
          </Box>
        </div>
      </div>
    </Typography>
  );
}

function MarkdownIntl({ children, ...props }: ComponentProps<typeof Markdown>) {
  const locale = useLocale();
  return (
    <Markdown
      components={{
        a: (props) => (
          <A href={props.href?.replace(/^\//, `/${locale}/`)}>
            {props.children}
          </A>
        ),
      }}
    >
      {children}
    </Markdown>
  );
}

function BoxImageRight({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-gradient-to-b from-primary-2/60 to-primary-2 to-20% -to-b sm:bg-gradient-to-bl sm:from-transparent sm:to-primary-2 sm:to-35% overflow-hidden">
      <div className="w-full h-full text-left float-right p-2 sm:p-4">
        {children}
      </div>
    </div>
  );
}

function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`h-full overflow-hidden ${className}`}>
      <div className="w-full h-full text-left float-left p-2 sm:p-4">
        {children}
      </div>
    </div>
  );
}

const dir = "projects";
export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
    markdowns: [
      await loadMarkdown(context, { name: "2022-shop-relaunch", dir }),
      await loadMarkdown(context, {
        name: "2021-containerize-and-update",
        dir,
      }),
      await loadMarkdown(context, {
        name: "2023-rushsoft-de",
        dir,
      }),
      await loadMarkdown(context, { name: "2023-shopping-list-pwa", dir }),
    ],
  },
});
