export function Card({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return <div className={`rounded-lg shadow-md ${className}`}>{children}</div>;
  }
  
  export function CardContent({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  