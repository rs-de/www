export default function Typography({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`format lg:format-lg dark:format-invert ${className}`}>
      {children}
    </div>
  );
}