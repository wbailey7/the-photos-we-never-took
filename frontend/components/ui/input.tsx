export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        {...props}
        className={`border border-gray-300 rounded-md px-4 py-2 w-full ${props.className || ""}`}
      />
    );
  }
  