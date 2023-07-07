import Link from "next/link";
import { Header } from "./Header";
import { useTranslations } from "next-intl";
import { CustomFlowbiteTheme, Flowbite, Footer } from "flowbite-react";
import { useTheme } from "next-themes";

export function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations();
  const { systemTheme } = useTheme();

  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-red-500 hover:bg-red-600",
      },
    },
  };

  return (
    <Flowbite theme={{ dark: systemTheme === "dark" }}>
      <div
        className="min-h-screen flex flex-col justify-between
       selection:text-white dark:selection:text-gray-800
       selection:bg-gray-800 dark:selection:bg-gray-200"
      >
        <Header />
        <main className="py-4 flex-1 flex flex-col gap-3 items-center text-center">
          {children}
        </main>
        <Footer container className="flex justify-between gap-2 flex-wrap">
          <Footer.Copyright
            by="Dipl.-Math. (FH) Jochen Probst"
            year={new Date().getFullYear()}
            className="whitespace-nowrap"
          />
          <Footer.LinkGroup className="flex gap-2">
            <Footer.Link href={`/imprint`} as={Link}>
              {t("imprint")}
            </Footer.Link>
            <Footer.Link href={`/privacy`} as={Link}>
              {t("privacy")}
            </Footer.Link>
            <Footer.Link href={`mailto:contact@rushsoft.de`}>
              {t("contact")}
            </Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </Flowbite>
  );
}
