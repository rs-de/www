export function A({ children, href, target = "_blank", className = "" }: A) {
  return (
    <a
      {...{ href, target }}
      className={`${className} underline decoration-gray-500`}
      rel="norefferer noopener"
    >
      {children}
    </a>
  );
}

type A = {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
};
