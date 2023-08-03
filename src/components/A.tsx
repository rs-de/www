import { ComponentProps } from "react";

export function A({
  children,
  href,
  target = "_blank",
  className = "",
  ...rest
}: ComponentProps<"a">) {
  return (
    <a
      {...{ href, target, ...rest }}
      className={`underline decoration-gray-500 ${className}`}
      rel="norefferer noopener"
    >
      {children}
    </a>
  );
}
