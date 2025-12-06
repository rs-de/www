import { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={`flex justify-center items-center ${props.className}`}
    />
  );
}

export function ButtonPrimary(props: ComponentProps<"button">) {
  return (
    <Button
      {...props}
      className={`transition-all duration-300 bg-blue-3 hover:bg-primary-4 border-2 rounded-sm border-primary-6 hover:border-primary-7 text-primary-9 hover:text-primary-10 ${props.className}`}
    />
  );
}
