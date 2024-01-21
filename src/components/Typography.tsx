export default function Typography({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`prose lg:prose-lg prose-radixColors w-full ${className}`}>
      {children}
    </div>
  );
}
