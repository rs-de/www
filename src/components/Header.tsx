import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Typography from "./Typography";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export function Header() {
  const [top, setTop] = useState(true);
  const t = useTranslations();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  const { pathname } = useRouter();
  return (
    <Navbar
      fluid
      border
      className={`transition-all z-50 sticky top-0 backdrop-blur bg-gray-100/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 ${
        !top && "shadow-md"
      }`}
      key={pathname}
    >
      <Navbar.Brand href="/" as={Link}>
        <Typography>
          <div className="flex items-center h-[40px] ">
            <Image
              priority
              width={80}
              height={40}
              alt="<JP>"
              src="/logo.svg"
              className="mr-2"
            />
            <b>Jochen Probst</b>
          </div>
          <div className="flex-1 tracking-[0.050em] lg:tracking-[0.03em] leading-4 pl-[3px]">
            <small>Web application development</small>
          </div>
        </Typography>
      </Navbar.Brand>
      <DarkThemeToggle className="ml-auto mr-3" />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/blog" as={Link} active={pathname === "/blog"}>
          Blog
        </Navbar.Link>
        <Navbar.Link href={`mailto:contact@rushsoft.de`}>
          {t("contact")}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
