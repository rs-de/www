import { ReactNode } from "react";

export function Tooltip({ children, content }: TooltipProps) {
  return <span title={content}>{children}</span>;
}

type TooltipProps = {
  children: ReactNode;
  content: string;
};
