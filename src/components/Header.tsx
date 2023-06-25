import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";

export function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Navbar
      fluid
      border
      className={`transition-all z-50 sticky top-0 backdrop-blur bg-gray-100/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 ${
        !top && "shadow-md"
      }`}
    >
      <Navbar.Brand href="/" as={Link}>
        <Image
          priority
          width={80}
          height={40}
          alt="<JP>"
          src="/logo.svg"
          className="mr-2"
        />
        <div className="format dark:format-invert leading-tight">
          <b>Jochen Probst</b>
          <br />
          Web Application Development
        </div>
      </Navbar.Brand>
      <DarkThemeToggle className="ml-auto mr-3" />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/blog" as={Link}>
          Blog
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
