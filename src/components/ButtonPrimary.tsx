import { Button } from "flowbite-react";

export default function ButtonPrimary({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      theme={{
        color: { primary: "bg-primary hover:bg-opacity-80 text-white" },
      }}
      color="primary"
      className={`${className}`}
      outline
    >
      {children}
    </Button>
  );
}
