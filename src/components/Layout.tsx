import Link from "next/link";
import { Header } from "./Header";
import { useTranslations } from "next-intl";
import { Footer } from "flowbite-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations();
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="py-4 flex-1 flex flex-col gap-3 items-center text-center">
        {children}
      </main>
      <Footer container>
        <Footer.Copyright
          by="Dipl.-Math. (FH) Jochen Probst"
          year={new Date().getFullYear()}
        />
        <Footer.LinkGroup>
          <Footer.Link href={`/imprint`} as={Link}>
            {t("imprint")}
          </Footer.Link>
          <Footer.Link href={`mailto:contact@rushsoft.de`}>
            {t("contact")}
          </Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
