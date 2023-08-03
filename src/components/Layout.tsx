import Link from "next/link";
import { useTranslations } from "next-intl";
import Navbar from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations();
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col gap-3 items-center text-center">
        {children}
      </main>
      <footer className="flex justify-between flex-wrap gap-2 bg-slate-2 text-slate-11 text-sm px-4 py-2">
        <div className="whitespace-nowrap">
          &copy;{new Date().getFullYear()} Dipl.-Math. (FH) Jochen Probst
        </div>
        <div className="flex gap-3">
          <Link className="hover:text-primary-12" href={"/blog"}>
            Blog
          </Link>
          <Link className="hover:text-primary-12" href={`/imprint`}>
            {t("imprint")}
          </Link>
          <Link className="hover:text-primary-12" href={`/privacy`}>
            {t("privacy")}
          </Link>
          <Link
            className="hover:text-primary-12"
            href={`mailto:contact@rushsoft.de`}
          >
            {t("contact")}
          </Link>
        </div>
      </footer>
    </>
  );
}
