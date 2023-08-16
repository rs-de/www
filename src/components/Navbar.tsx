"use client";
import Link from "next/link";
import Image from "next/image";
import { ComponentProps, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Tooltip } from "@/components/Tooltip";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [top, setTop] = useState(true);
  const t = useTranslations();
  const menueItems = useMemo(
    () => [
      { href: "/blog", label: "Blog" },
      { href: "/projects", label: t("projects") },
      { href: "mailto:contact@rushsoft.de", label: t("contact") },
      {
        href: "https://github.com/rs-de/www",
        label: (
          //github icon does not exist in heroicons
          <Tooltip content={t("view_on_github")}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-slate-11"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              />
            </svg>
          </Tooltip>
        ),
      },
    ],
    [t]
  );
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`transition-all z-10 sticky top-0 flex justify-between items-center p-2 bg-blue-2/50 backdrop-blur-md ${
        !top && "shadow-md"
      }`}
    >
      <div className="text-slate-11">
        <Link href={`/`}>
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
          <div className="tracking-[0.05em] leading-4 pl-[3px]">
            <small>Web application development</small>
          </div>
        </Link>
      </div>
      <div className="hidden sm:flex gap-4 items-center">
        {menueItems.map((item) => (
          <NavbarLink href={item.href} key={item.href}>
            {item.label}
          </NavbarLink>
        ))}
      </div>
      <Button
        className="flex sm:hidden text-slate-11"
        onClick={(e) => {
          setMenuOpen(true);
        }}
        aria-label="Open menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </Button>
      <Dialog open={menuOpen} onClose={() => {}} className="relative z-50">
        <Dialog.Backdrop className="fixed inset-0 bg-slate-1/80" />
        <div
          className="fixed inset-0 pt-[70px]"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
        >
          <Dialog.Panel className="w-full max-w-sm bg-slate-1 p-2 flex flex-col gap-4 items-end">
            {menueItems.map((item) => (
              <NavbarLink
                onClick={() => {
                  setMenuOpen(false);
                }}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </NavbarLink>
            ))}
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  );
}

function NavbarLink(props: NavbarLinkProps) {
  const isActive = props.href === usePathname();
  return (
    <Link
      {...props}
      className={`focus:outline-none ${
        isActive ? "text-slate-12" : "text-slate-11"
      } hover:text-slate-12 ${props.className ?? ""}`}
    >
      {props.children}
    </Link>
  );
}

type NavbarLinkProps = ComponentProps<typeof Link>;
