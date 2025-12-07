import { ReactNode } from "react";

// These tags are available
type Tag = "b";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export function RichText({ children }: Props) {
  return (
    <>
      {children({
        b: (chunks: ReactNode) => <b>{chunks}</b>,
      })}
    </>
  );
}
