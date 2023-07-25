import { Button, ButtonProps } from "flowbite-react";

export default function ButtonPrimary({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <Button
      theme={{
        color: { primary: "bg-primary hover:bg-opacity-80 text-white" },
      }}
      color="primary"
      className={`${className}`}
      outline
      {...rest}
    >
      {children}
    </Button>
  );
}
