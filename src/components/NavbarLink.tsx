import { Navbar, NavbarLinkProps } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {} from "react-icons/hi";

export function NavbarLink({
  children,
  href,
  className,
  ...rest
}: NavbarLinkProps) {
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <Navbar.Link
      href={href}
      as={Link}
      active={active}
      className={`${active && "bg-primary md:text-primary"} ${className}`}
      {...rest}
    >
      {children}
    </Navbar.Link>
  );
}
